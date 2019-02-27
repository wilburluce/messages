import { UserComplete } from './user.actions';
import { User } from './user.model';

export type State = User;

export const initialState: State = {
  name: '',
  id: null
};

export function reducer(state = initialState, action: UserComplete): State {
  switch (action.type) {
    case UserComplete.type:
      return {...action.user};
    default:
      return state;
  }
}
