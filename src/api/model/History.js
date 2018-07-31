import mongoose from 'mongoose';

const History = new mongoose.Schema({
  user_input: String,
  bot_response: String,
  response_timestamp: Date,
});

History.statics.paging = async function paging(limit, page) {
  return this.model('History').find().find().limit(limit)
    .skip(limit * page)
    .sort({ response_timestamp: 'desc' });
};

export default mongoose.model('History', History);
