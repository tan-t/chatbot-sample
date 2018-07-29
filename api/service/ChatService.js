class ChatService {
    constructor(apiClient) {
        this.apiClient_ = apiClient;
    }
    async respondTokyoWeather() {
        const res = await this.apiClient_.getTokyoWeather();
        return `今日の天気は${Translation[res.weather[0].main]}です。`;
    }
}

const Translation = {
  Thunderstorm: '雷雨',
  Rain: '雨',
  Drizzle: '霧雨',
  Snow: '雪',
  Clear: '晴れ',
  Clouds: '曇り'
};

module.exports = ChatService;
