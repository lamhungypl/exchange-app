import { SsoEnv, IConfig } from './typings';

const ENV_CONFIG: Record<SsoEnv, IConfig> = {
  dev: {
    SSO_ORIGIN: 'https://account.tala.xyz',
    ACCOUNT_API_URL: 'https://account.tala.xyz/api',
    SSO_AUTH_URL: 'https://account.tala.xyz/oauth2/auth',
    SSO_AUTH_LOGOUT_URL: 'https://account.tala.xyz/oauth2/logout',
    REQUEST_TIMEOUT_MS: '3000',
  },
  prod: {
    SSO_ORIGIN: 'https://account.tiki.vn',
    ACCOUNT_API_URL: 'https://account.tiki.vn/api',
    SSO_AUTH_URL: 'https://account.tiki.vn/oauth2/auth',
    SSO_AUTH_LOGOUT_URL: 'https://account.tiki.vn/oauth2/logout',
    REQUEST_TIMEOUT_MS: '3000',
  },
};

class ServiceConfig {
  private config: IConfig = null;

  setEnvConfig = (env: SsoEnv) => {
    this.config = ENV_CONFIG[env];
  };

  getConfig = (name: keyof IConfig) => this.config[name];
}

const config = new ServiceConfig();
const setEnvConfig = config.setEnvConfig;
const getConfig = config.getConfig;
export { setEnvConfig, getConfig };
