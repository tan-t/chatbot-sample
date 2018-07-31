const Translation = {
  Thunderstorm: '雷雨',
  Rain: '雨',
  Drizzle: '霧雨',
  Snow: '雪',
  Clear: '晴れ',
  Clouds: '曇り',
};

export class ChatService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async respond(request) {
    switch (request.text) {
      case 'こんにちは':
        return this.respondHello();
      case '今何時？':
        return this.respondCurrentTime(request.time);
      case '今日の東京の天気は？':
        return this.respondTokyoWeather();
      default:
        throw '返答できないメッセージです。';
    }
  }

  async respondHello() {
    return 'こんにちは。';
  }

  async respondTokyoWeather() {
    const res = await this.apiClient.getTokyoWeather();
    return `${Translation[res.weather[0].main]}です。`;
  }

  async respondCurrentTime(jstDate) {
    return `${jstDate.getHours()}時${jstDate.getMinutes()}分です。`;
  }
}

export class Request {
  constructor(time, text) {
    this.time = time;
    this.text = text;
  }
}
