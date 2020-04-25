import { ENV } from './core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  //AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '543eS0jTFFxDYei7SyVJu8qiaX4Z2Vy0',
  CLIENT_DOMAIN: 'dev-testing3308.auth0.com', // e.g., you.auth0.com
  //AUDIENCE: 'http://localhost:8083/api/', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};