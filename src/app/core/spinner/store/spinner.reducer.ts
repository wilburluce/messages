import { BaseServiceAction } from '../../../shared/base.actions';

export interface State {
  requests: number;
  message: string;
}

const initialState: State = {requests: 0, message: ''};
type Actions = BaseServiceAction;

export function reducer(state = initialState, action: Actions): State {
  if (action instanceof BaseServiceAction) {
    if (action.phase === 'request') {
      ++state.requests;
      state.message = action.spinnerMessage();
    }
    if (action.phase === 'complete' || action.phase === 'error') {
      --state.requests;
    }
  }
  if (state.requests === 0) {
    state = initialState;
  }
  return {...state};
}
