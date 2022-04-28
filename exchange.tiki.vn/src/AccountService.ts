import { getConfig } from './ServiceConfig';
import {
  IAccountInfo,
  IIdentityResponsePayload,
  ILoginParams,
  ISsoMessageRequest,
  ISsoMessageResponse,
  SsoMsgAction,
} from './typings';

class AccountService {
  private ssoIframeInstance: HTMLIFrameElement = null;

  private checkIncomingMessage = (event: MessageEvent) => {
    return !event.origin || event.origin === getConfig('SSO_ORIGIN');
  };

  private sendMsg = <T = any>(
    requestMsg: ISsoMessageRequest,
  ): Promise<ISsoMessageResponse<T>> =>
    new Promise<ISsoMessageResponse<T>>((resolve, reject) => {
      if (this.ssoIframeInstance?.contentWindow) {
        const messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = (event: MessageEvent) => {
          if (this.checkIncomingMessage(event)) {
            const { action, status, payload, error } =
              event.data as ISsoMessageResponse;
            if (action === requestMsg.action) {
              if (status === 'SUCCESS') {
                resolve(payload);
              } else {
                reject(error);
              }
            }
          }
        };
        this.ssoIframeInstance.contentWindow.postMessage(
          requestMsg,
          getConfig('SSO_AUTH_URL'),
          [messageChannel.port2],
        );
        setTimeout(() => {
          reject('Response timeout exceeds!');
        }, Number(getConfig('REQUEST_TIMEOUT_MS')));
      } else {
        reject(
          'Please await until initClient successful before sending any event!',
        );
      }
    });

  initSsoIframe = (iframeContainer: HTMLElement = document.body) => {
    const self = this;
    return new Promise((resolve, reject) => {
      try {
        const iframe = document.createElement('iframe');
        iframe.title = 'Tiki SSO';
        iframe.style.display = 'none';
        iframe.src = getConfig('SSO_AUTH_URL');
        iframe.onload = (event) => {
          if (event.target) {
            self.ssoIframeInstance = event.target as HTMLIFrameElement;
            resolve(event);
          }
        };
        iframeContainer.appendChild(iframe);
      } catch (error) {
        reject(error);
      }
    });
  };

  login = (params: ILoginParams = {}): Promise<IIdentityResponsePayload> =>
    new Promise((resolve, reject) => {
      const {
        isRegister = false,
        redirectUrl = '',
        includes = '',
        username = '',
      } = params;
      const ssoParams = new URLSearchParams({
        username,
        redirectUrl,
        includes,
        action: isRegister ? 'register' : 'login',
      });
      if (redirectUrl) {
        window.location.href = `${getConfig(
          'SSO_AUTH_URL',
        )}?${ssoParams.toString()}`;
        return;
      }
      const IFRAME_WIDTH = 500;
      const IFRAME_HEIGHT = 650;
      const IFRAME_TOP = window.screen.height / 2 - IFRAME_WIDTH / 2;
      const IFRAME_LEFT = window.screen.width / 2 - IFRAME_HEIGHT / 2;
      const features = `width=${IFRAME_WIDTH}, height=${IFRAME_HEIGHT}, top=${IFRAME_TOP}, left=${IFRAME_LEFT}`;
      const windowUrl = `${getConfig('SSO_AUTH_URL')}?${ssoParams.toString()}`;

      try {
        const ssoWindowInstance = window.open(windowUrl, undefined, features);
        window.onmessage = (event: MessageEvent) => {
          if (this.checkIncomingMessage(event)) {
            const { action, status, payload, error } =
              event.data as ISsoMessageResponse<IIdentityResponsePayload>;
            if (action === SsoMsgAction.LOGIN) {
              if (status === 'SUCCESS') {
                ssoWindowInstance.close();
                resolve(payload);
              } else {
                throw new Error(error);
              }
            }
          }
        };
      } catch (error) {
        reject(error);
      }
    });

  getAccessTokenByIndex = (accountIndex: number) =>
    this.sendMsg<IIdentityResponsePayload>({
      action: SsoMsgAction.GET_ACCESS_TOKEN,
      payload: accountIndex,
    });

  getAccessTokenByCustomerId = (customerId: number) =>
    this.sendMsg<IIdentityResponsePayload>({
      action: SsoMsgAction.GET_ACCESS_TOKEN,
      payload: { customerId },
    });

  getTalaAccount = () =>
    this.sendMsg<IIdentityResponsePayload>({
      action: SsoMsgAction.GET_ACTIVE_TALA_ACCOUNT,
    });

  getAccounts = () =>
    this.sendMsg<IAccountInfo>({
      action: SsoMsgAction.GET_ACCOUNT_LIST,
    });

  logoutAllAccounts = ({ isRedirect = false } = {}) => {
    if (isRedirect) {
      window.location.href = getConfig('SSO_AUTH_LOGOUT_URL');
      return true;
    }

    return this.sendMsg({
      action: SsoMsgAction.LOGOUT_ALL,
    });
  };
}

export default new AccountService();
