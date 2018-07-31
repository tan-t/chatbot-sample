import Koa from 'koa';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CustomRouter from './middleware/Router';
import AccessLogger from './middleware/AccessLogger';
import ErroHandler from './middleware/ErrorHandler';
import env from './config/environment/index';
import log4js from 'log4js';

dotenv.config();

const app = new Koa();
const config = env();

log4js.configure(config.log4js.configure);

app.use(AccessLogger);
app.use(ErroHandler);

const router = CustomRouter();
app.use(router.routes());
app.use(router.allowedMethods());

mongoose.connect(env().mongoUrl);

app.listen(3000);
