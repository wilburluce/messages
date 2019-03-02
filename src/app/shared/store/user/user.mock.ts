import { UserList } from './user.model';

export function getMockUserList(): UserList {
  const list: UserList = [];
  for (let i = 0; i < 10; i++) {
    list.push({name: `User ${i}`, id: i});
  }
  return list;
}
