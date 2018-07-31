import History from '../model/History.js';
import { Request } from '../service/ChatService.js';

export class ChatController {
  constructor(chatService) {
    this.chatService = chatService;
  }

  async chat(ctx, next) {
    const request = new Request(new Date(Date.now()), ctx.request.body.user_input);
    const botResponse = await this.chatService.respond(request);
    const res = {
      user_input: request.text,
      response_timestamp: new Date(Date.now()),
      bot_response: botResponse,
    };
    await History.create(res);
    ctx.body = res;
    next();
  }
}


