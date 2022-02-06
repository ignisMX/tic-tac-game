const path = require('path');
module.exports = {
    webpackDevMiddleware: (config) => {
      // Solve compiling problem via vagrant
      config.watchOptions = {
        poll: 1000,   // Check for changes every second
        aggregateTimeout: 300,   // delay before rebuilding
      };
      return config;
    },
    webpack: (config) => {
      config.resolve.alias['@'] = path.resolve(__dirname);
      config.resolve.alias['@components'] = path.resolve(__dirname, 'pages/components');
      return config;
    }
};