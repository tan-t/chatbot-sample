import History from '../model/History.js';

export class HistoryController {
  constructor() {
  }

  async list(ctx, next) {
    const res = await History.paging(10, 0);
    ctx.body = res;
    next();
  }
}
