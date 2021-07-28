import { rejectBlank } from 'tools';
import common from './common';
import development from './development';

const overrides = rejectBlank({
  domain: process.env.REACT_APP_DOMAIN,
  apiHost: process.env.REACT_APP_API_URL,
  dashboardHost: process.env.REACT_APP_DASHBOARD_URL,
});


const configEnv = process.env.REACT_APP_CONFIG || 'development';
const config = {
  development,
}[configEnv];

console.debug(`[Config]`, { ...common, ...config, ...overrides });
console.log(`CONFIG ENVIRONMENT`, configEnv);


export default {
  ...common,
  ...config,
  ...overrides,
};
