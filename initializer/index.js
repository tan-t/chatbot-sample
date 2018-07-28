const ModelLoader = require('./model-loader.js');
const Config = require('../config/model.js');
const path = require('path');
const mongoose = require('mongoose');
module.exports = async () =>{
    await mongoose.connect('mongodb://localhost/test');
    return ModelLoader(path.join('../',Config.path));
}