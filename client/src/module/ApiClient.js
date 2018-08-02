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
    return axios.post('/chat', {user_input:text} ).then(res => res.data);
  }
}
