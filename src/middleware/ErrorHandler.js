import log4js from 'log4js';

export default async (ctx, next) => {
  const logger = log4js.getLogger('error');
  try {
    await next();
  } catch (err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
    logger.error({
      message: err.message,
      timestamp: new Date(),
      url: ctx.url,
      httpMethod: ctx.method
    });
  }
};
