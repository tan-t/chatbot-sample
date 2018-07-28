const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
module.exports = async (modelsPath)=> {
  const files = await readDirInPromise(modelsPath);
  const models = files.map(file=>({name:file.split('.')[0],model:require(path.join(modelsPath,file))}));
  return Promise.all(models.map(m=>mongoose.model(m.name,m.model)));
};

const readDirInPromise = async (p)=> {
    return new Promise((resolve,reject)=> {
      fs.readdir(path.join(__dirname,p),async (err,files)=> {
          if(err) return reject(err);
          resolve(files);
      })        
    })
};