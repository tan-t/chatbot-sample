import Koa from 'koa';
import CustomRouter from './middleware/Router';
import Logger from './middleware/Logger';
import ErroHandler from './middleware/ErrorHandler';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import env from './config/environment/index';
dotenv.config();

const app = new Koa();

app.use(Logger);
app.use(ErroHandler);

const router = CustomRouter();
app.use(router.routes());
app.use(router.allowedMethods());

mongoose.connect(env().mongoUrl);

app.listen(3000);
