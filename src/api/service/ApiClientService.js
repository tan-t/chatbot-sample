import axiosBase from 'axios';
import env from '../../config/environment/index';

export class ApiClientService {
  constructor() {
    this.axios = axiosBase.create({
      baseURL: 'https://api.openweathermap.org',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      responseType: 'json',
    });
  }

  async getTokyoWeather() {
    return this.axios.get('/data/2.5/weather', {
      query: { id: 1850147, APPID: env().apiKey },
    }).then(res => res.data);
  }
}
