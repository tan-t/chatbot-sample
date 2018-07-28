const Initializer = require('../../initializer');
const mongoose = require('mongoose');

it('can insert a record', async () => {
    await Initializer();
    const History = mongoose.model('History');
    const history = new History({time:'10:00:00',by:"user",msg:"hi"});
    const saved = await history.save();
    expect(saved.time).toBeDefined();
});