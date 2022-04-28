export type SsoEnv = 'dev' | 'prod';
export interface IConfig {
  SSO_ORIGIN: string;
  ACCOUNT_API_URL: string;
  SSO_AUTH_URL: string;
  SSO_AUTH_LOGOUT_URL: string;
  REQUEST_TIMEOUT_MS: string;
}
export interface LoginCallbackParams {
  accountIndex?: string;
  accessToken?: string;
  refreshToken?: string;
  customerId?: string;
}
export interface IInitClientParams {
  env: SsoEnv;
  iframeContainer?: HTMLElement;
}
export interface ISsoMessageRequest<T = any> {
  action: SsoMsgAction;
  payload?: T;
}
export interface ISsoMessageResponse<T = any> {
  status: 'SUCCESS' | 'FAIL';
  action: SsoMsgAction;
  payload?: T;
  error?: string;
}
export interface IIdentityResponse {
  access_token: string;
  refresh_token: string;
  customer_id: number;
  expires_at: number;
  expires_in: number;
  token_type: string;
}
export interface IIdentityResponsePayload {
  accessToken: string;
  refreshToken?: string;
  accountIndex?: number;
}
export interface ILoginParams {
  isRegister?: boolean; // open register popup
  username?: string; // autofilled username value when redirecting to login page
  includes?: string; // [REDIRECT mode only] specify desired fields to be includes in callback url, separated by a comma ","; by default 'accountIndex', 'accessToken', 'refreshToken' will be includes
  redirectUrl?: string; // [REDIRECT mode only] an callback url to be redirected after login success
}
export interface IUserInfo {
  id?: number;
  name: string;
  email?: string;
  avatar_url?: string;
  raw_email?: string;
  phone_number?: string;
}
export interface IAccountInfo {
  accountIndex?: number;
  customerId: number;
  accessToken?: string;
  refreshToken?: string;
  userInfo?: Partial<IUserInfo>;
  createdAt: number;
  updatedAt: number;
}
export enum SsoMsgAction {
  LOGIN = 'LOGIN',
  LOGOUT_ALL = 'LOGOUT_ALL',
  GET_ACCESS_TOKEN = 'GET_ACCESS_TOKEN',
  GET_ACTIVE_TALA_ACCOUNT = 'GET_ACTIVE_TALA_ACCOUNT',
  GET_ACCOUNT_LIST = 'GET_ACCOUNT_LIST',
}
export enum SsoLoginMode {
  REDIRECT = 'REDIRECT',
  WINDOW = 'WINDOW',
}
