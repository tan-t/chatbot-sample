const axiosBase = require('axios');
const axios = axiosBase.create({
  baseURL: 'https://api.openweathermap.org',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
});

module.exports = {
    async getTokyoWeather() {
          return axios.get('/data/2.5/weather',{query: {id:1850147,APPID:process.env.API_KEY}}).then(res=>res.data);
    }
};