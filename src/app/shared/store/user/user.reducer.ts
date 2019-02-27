import { UserComplete } from './user.actions';
import { User } from './user.model';

export interface State {
  user: User;
}

export const initialState: State = {
  user: null
};

export function reducer(state = initialState, action: UserComplete): State {
  switch (action.type) {
    case UserComplete.type:
      return {...state, user: action.user};
    default:
      return state;
  }
}
