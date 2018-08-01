import History from '../model/History';
import { Request } from '../service/ChatService';
import moment from 'moment-timezone';

export default class ChatController {
  constructor(chatService) {
    this.chatService = chatService;
  }

  async chat(ctx, next) {
    const request = new Request(moment().tz('Asia/Tokyo'), ctx.request.body.user_input);
    const botResponse = await this.chatService.respond(request);
    const res = {
      user_input: request.text,
      response_timestamp: moment().tz('Asia/Tokyo').format(),
      bot_response: botResponse,
    };
    await History.create(res);
    ctx.body = res;
    next();
  }
}
