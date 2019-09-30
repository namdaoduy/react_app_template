import deepFreeze from 'deep-freeze';

import baseConfig from './base';
import localConfig from './local';
import devConfig from './dev';
import prodConfig from './prod';

const env = process.env.REACT_APP_ENV;
let envConfig = {};
if (env === 'development') {
  envConfig = devConfig;
} else if (env === 'production') {
  envConfig = prodConfig;
} else {
  envConfig = localConfig;
}

const configs = {
  ...baseConfig,
  ...envConfig,
};

deepFreeze(configs);

export default configs;
