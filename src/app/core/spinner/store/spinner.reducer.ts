import { SpinnerReset } from './spinner.actions';
import { BaseServiceAction } from '../../../shared/base.actions';

export interface State {
  requests: number;
  message: string;
}

const initialState: State = {requests: 0, message: ''};
type Actions = BaseServiceAction | SpinnerReset;

export function reducer(state = initialState, action: Actions): State {
  if (action instanceof BaseServiceAction) {
    if (action.phase === 'request') {
      ++state.requests;
      state.message = action.spinnerMessage();
    }
    if (action.phase === 'complete') {
      // Math.max to prevent any race condition when loading is reset
      // ie another request could complete just after reset which then make state -1
      state.requests = Math.max(--state.requests, 0);
    }
  }
  if (action.type === SpinnerReset.type || state.requests === 0) {
    state = initialState;
  }

  return {...state};
}
