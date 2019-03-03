import { TopicList } from './topic.model';

export function getMockTopicList(): TopicList {
  const list: TopicList = [];
  for (let i = 0; i < 10; i++) {
    list.push({name: `Topic ${i}`, id: i});
  }
  return list;
}
