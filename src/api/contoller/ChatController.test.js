import { ChatController } from './ChatController.js';
import History from '../model/History.js';

describe('ChatController',async ()=>{
  it('sets ctx.body what service responds.',async ()=>{
    const spy = jest.spyOn(History,'create').mockImplementation();
    const mockService = {
        async respond(request) {
        return 'test';
      }
    };
    const controller = new ChatController(mockService);
    const ctx = {request:{body:{user_input:'input'}}};
    await controller.chat(ctx,()=>{});
    expect(spy).toHaveBeenCalled();
    expect(ctx.body.bot_response).toBe('test');
    expect(ctx.body.user_input).toBe('input');
    expect(ctx.body.response_timestamp).toBeDefined();
  })
});
