import { TopicComplete } from './Topic.actions';
import { Topic } from './topic.model';

export type State = Topic;

export const initialState: State = {
  name: '',
  id: null
};

export function reducer(state = initialState, action: TopicComplete): State {
  switch (action.type) {
    case TopicComplete.type:
      return {...action.Topic};
    default:
      return state;
  }
}
