export interface Message {
  id: number;
  userId: number;
  parentId?: number;
  topicId: number;
  content: string;
  created: Date;
}

export type MessageList = Message[];
