import mongoose from 'mongoose';
import History from '../model/History';
import HistoryController from './HistoryController';
import env from '../../config/environment/test';

describe('HistoryController',async ()=>{
  beforeEach(async () => {
    await mongoose.connect(env().mongoUrl);
  });

  afterEach(async () => {
    await History.remove({});
    await mongoose.disconnect();
  });

  it('can get 10 items per page', async () => {
    const controller = new HistoryController();
    const mockRet = (new Array(10)).fill(0).map(()=>({ response_timestamp: new Date(), user_input: 'test', bot_response: 'hi' }));
    const spy = jest.spyOn(History,'paging').mockReturnValue(mockRet);
    const ctx = {};
    await controller.list(ctx,()=>{});
    expect(spy).toHaveBeenCalled();
    expect(ctx.body.length).toBe(10);
  });
});
