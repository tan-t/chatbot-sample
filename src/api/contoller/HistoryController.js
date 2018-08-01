import History from '../model/History';

class HistoryResponse {
  constructor(model) {
    this.user_input = model.user_input;
    this.response_timestamp = model.response_timestamp;
    this.bot_response = model.bot_response;
  }
}

export default class HistoryController {
  async list(ctx, next) {
    const histories = await History.paging(10, 0);
    ctx.body = histories.map(history => (new HistoryResponse(history)));
    next();
  }
}
