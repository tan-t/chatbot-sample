const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const History = new Schema({
  time:  String,
  by: String,
  msg: String
});

module.exports = mongoose.model('History',History);
