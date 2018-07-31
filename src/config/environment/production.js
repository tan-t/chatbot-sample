export default {
  mongoUrl: process.env.MONGO_URL,
  apiKey: process.env.API_KEY,
  log4js: {
    level: 'INFO',
    configure: {
      appenders: {
        access: {
          type: 'console'
        },
        error : {
          type: 'console'
        }
      },
      categories: {
        default: {appenders:['access'],level: 'info'},
        error: {appenders:['error'],level:'error'}
      },
      replaceConsole: true
    }
  }
};
