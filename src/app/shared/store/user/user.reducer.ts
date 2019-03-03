import * as actions from './user.actions';
import { User } from './user.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

type Actions = actions.FetchComplete | actions.FetchListComplete | actions.SaveComplete ;

export interface State extends EntityState<User> {}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: user => user.id,
  sortComparer: (a: User, b: User): number =>
    a.name.localeCompare(b.name)
});

export const initialState = userAdapter.getInitialState({});

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = userAdapter.getSelectors();

export function reducer(state = initialState, action: Actions): State {
  if (action instanceof actions.FetchComplete) {
    return userAdapter.addOne(action.user, state);
  }
  if (action instanceof actions.FetchListComplete) {
    return userAdapter.addAll(action.userList, state);
  }
  if (action instanceof actions.SaveComplete) {
    return userAdapter.upsertOne(action.user, state);
  }
  return state;
}
