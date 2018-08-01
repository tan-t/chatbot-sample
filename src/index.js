import Koa from 'koa';
import mongoose from 'mongoose';
import log4js from 'log4js';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import CustomRouter from './middleware/Router';
import AccessLogger from './middleware/AccessLogger';
import ErroHandler from './middleware/ErrorHandler';
import env from './config/environment/index';

const app = new Koa();
app.use(bodyParser());

const config = env();

log4js.configure(config.log4js.configure);

app.use(AccessLogger);
app.use(ErroHandler);

const router = CustomRouter();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(__dirname + '/public'));

mongoose.connect(env().mongoUrl);

app.listen(3000);
