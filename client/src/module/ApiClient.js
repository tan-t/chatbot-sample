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
    // const params = new URLSearchParams();
    // params.append('user_input', text);
    return axios.post('/chat', {user_input:text} /*,  {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }*/).then(res => res.data);
  }
}
