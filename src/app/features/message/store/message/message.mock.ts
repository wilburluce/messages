import { MessageList } from './message.model';

export function getMockMessageList(): MessageList {
  const list: MessageList = [];
  for (let i = 0; i < 10; i++) {
    const msg = {
      id: i,
      userId: i,
      parentId: i + 1,
      topicId: i,
      content: `This is a message ${i}`,
      created: new Date(),
    };
    list.push(msg);
  }
  return list;
}
