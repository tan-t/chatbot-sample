import History from '../model/History';

export default class HistoryController {
  async list(ctx, next) {
    const res = await History.paging(10, 0);
    ctx.body = res;
    next();
  }
}
