const mongoose = require('mongoose');
const History = require('./History');

it('can insert a record', async () => {
    await mongoose.connect('mongodb://localhost/test');
    const history = new History({time:'10:00:00',by:"user",msg:"hi"});
    const saved = await history.save();
    expect(saved.time).toBeDefined();
});