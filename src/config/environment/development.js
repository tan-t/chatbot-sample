export default {
  mongoUrl: 'mongodb://localhost/development',
  apiKey: process.env.API_KEY,
  log4js: {
    level: 'ALL',
    configure: {
      appenders: {
        access: {
          type: 'console',
        },
        error: {
          type: 'console',
        },
      },
      categories: {
        default: { appenders: ['access'], level: 'info' },
        error: { appenders: ['error'], level: 'error' },
      },
      replaceConsole: true,
    },
  },
};
