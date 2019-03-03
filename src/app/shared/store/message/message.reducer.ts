import * as actions from './message.actions';
import { Message } from './message.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

type Actions = actions.FetchComplete | actions.FetchListComplete | actions.SaveComplete ;

export interface State extends EntityState<Message> {}

export const messageAdapter: EntityAdapter<Message> = createEntityAdapter<Message>({
  selectId: message => message.id,
  sortComparer: (a: Message, b: Message): number =>
    a.name.localeCompare(b.name)
});

export const initialState = messageAdapter.getInitialState({});

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = messageAdapter.getSelectors();

export function reducer(state = initialState, action: Actions): State {
  if (action instanceof actions.FetchComplete) {
    return messageAdapter.addOne(action.message, state);
  }
  if (action instanceof actions.FetchListComplete) {
    return messageAdapter.addAll(action.messageList, state);
  }
  if (action instanceof actions.SaveComplete) {
    return messageAdapter.upsertOne(action.message, state);
  }
  return state;
}
