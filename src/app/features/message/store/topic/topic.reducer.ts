import * as actions from './topic.actions';
import { Topic } from './topic.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

type Actions = actions.FetchComplete | actions.FetchListComplete | actions.SaveComplete ;

export interface State extends EntityState<Topic> {}

export const topicAdapter: EntityAdapter<Topic> = createEntityAdapter<Topic>({
  selectId: topic => topic.id,
  sortComparer: (a: Topic, b: Topic): number =>
    a.name.localeCompare(b.name)
});

export const initialState = topicAdapter.getInitialState({});

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = topicAdapter.getSelectors();

export function reducer(state = initialState, action: Actions): State {
  if (action instanceof actions.FetchComplete) {
    return topicAdapter.addOne(action.topic, state);
  }
  if (action instanceof actions.FetchListComplete) {
    return topicAdapter.addAll(action.topicList, state);
  }
  if (action instanceof actions.SaveComplete) {
    return topicAdapter.upsertOne(action.topic, state);
  }
  return state;
}
