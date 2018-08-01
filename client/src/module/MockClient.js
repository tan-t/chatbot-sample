import axiosBase from 'axios';
const axios = axiosBase.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
});

export default {
  async sendMessage(text) {
    return axios.get('/chat.json').then(res => res.data);
  }
}
