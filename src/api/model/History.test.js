import mongoose from 'mongoose';
import History from './History';
import env from '../../config/environment/test';

describe('History',async ()=>{
  beforeEach(async () => {
    await mongoose.connect(env.mongoUrl);
  });

  afterEach(async () => {
    await History.remove({});
    await mongoose.disconnect();
  });

  it('can insert a record', async () => {
    const history = new History({ response_timestamp: new Date(), user_input: 'test', bot_response: 'hi' });
    const saved = await history.save();
    expect(saved.response_timestamp).toBeDefined();
  });

  it('can get 10 items per page', async () => {
    const histories = (new Array(15)).fill(0).map(()=>({ response_timestamp: new Date(), user_input: 'test', bot_response: 'hi' }));
    await History.create(histories);
    const page1 = await History.paging(10,0);
    expect(page1.length).toBe(10);
    const page2 = await History.paging(10,1);
    expect(page2.length).toBe(5);
  });
});
