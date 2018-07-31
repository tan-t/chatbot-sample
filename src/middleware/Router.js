import Router from 'koa-router';
import route from '../config/route';

export default function () {
  const router = Router();
  route.forEach((r) => {
    router[r.method](r.route, r.handler);
  });
  return router;
}
