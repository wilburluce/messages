import { MessageList } from './message.model';

export function getMockMessageList(): MessageList {
  const list: MessageList = [];
  for (let i = 0; i < 10; i++) {
    list.push({name: `Message ${i}`, id: i});
  }
  return list;
}
