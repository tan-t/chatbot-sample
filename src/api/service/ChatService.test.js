import { ChatService, Request } from './ChatService.js';
import moment from 'moment';

describe('ChatService',()=>{
  it('respond weather properly', async () => {
    const mockClient = {
      async getTokyoWeather() {
        return {
          coord: {
            lon: -0.13,
            lat: 51.51,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'light rain',
              icon: '10n',
            },
          ],
          base: 'cmc stations',
          main: {
            temp: 286.164,
            pressure: 1017.58,
            humidity: 96,
            temp_min: 286.164,
            temp_max: 286.164,
            sea_level: 1027.69,
            grnd_level: 1017.58,
          },
          wind: {
            speed: 3.61,
            deg: 165.001,
          },
          rain: {
            '3h': 0.185,
          },
          clouds: {
            all: 80,
          },
          dt: 1446583128,
          sys: {
            message: 0.003,
            country: 'GB',
            sunrise: 1446533902,
            sunset: 1446568141,
          },
          id: 2643743,
          name: 'London',
          cod: 200,
        };
      },
    };
    const service = new ChatService(mockClient);
    const response = await service.respondTokyoWeather();
    expect(response).toBe('雨です。');
  });

  it("respond こんにちは。",async() => {
    const service = new ChatService();
    const response = await service.respondHello();
    expect(response).toBe('こんにちは。');
  });

  it("respond こんにちは。 to こんにちは",async() => {
    const service = new ChatService();
    const message = new Request(new Date(), 'こんにちは')
    const response = await service.respond(message);
    expect(response).toBe('こんにちは。');
  });

  it("respond 10時9分です。",async() => {
    const service = new ChatService();
    const d = moment('2018-08-01 10:09');
    const response = await service.respondCurrentTime(d);
    expect(response).toBe('10時9分です。');
  });

  it("respond 10時9分です。 to 今何時？",async() => {
    const service = new ChatService();
    const d = moment('2018-08-01 10:09');
    const message = new Request(d, '今何時？');
    const response = await service.respond(message);
    expect(response).toBe('10時9分です。');
  });
});
