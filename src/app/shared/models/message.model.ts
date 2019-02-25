export interface Message {
  id: string;
  userId: string;
  parentId: string;
  topicId: string;
  content: string;
  created: Date;
}
