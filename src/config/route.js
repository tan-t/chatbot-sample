import ChatController from '../api/contoller/ChatController';
import { ChatService } from '../api/service/ChatService';
import ApiClientService from '../api/service/ApiClientService';
import HistoryController from '../api/contoller/HistoryController';

const apiClientService = new ApiClientService();
const chatService = new ChatService(apiClientService);
const chatController = new ChatController(chatService);
const historyController = new HistoryController();

export default [
  {
    method: 'post', route: '/chat', handler: chatController.chat,
  },
  {
    method: 'get', route: '/history/list', handler: historyController.list,
  },
];
