import log4js from 'log4js';

export default async (ctx, next) => {
  const logger = log4js.getLogger('access');
  const start = new Date();
  await next();
  const ms = new Date() - start;
  logger.info({timestamp: new Date(),url: ctx.url, httpMethod: ctx.method, elapsedTime: `${ms}ms`});
};

