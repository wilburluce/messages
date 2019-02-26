import { SpinnerReset } from './spinner.actions';
import { Spinner } from './spinner.model';
import { BaseServiceAction } from '../../../shared/base.actions';

export type State = Spinner;

const initialState: State = {requestsInProgress: 0, message: ''};
type Actions = BaseServiceAction | SpinnerReset;

export default function spinnerReducer(state: Spinner = initialState, action: Actions): State {
  if (action instanceof BaseServiceAction) {
    if (action.phase === 'request') {
      ++state.requestsInProgress;
      state.message = action.spinnerMessage();
    }
    if (action.phase === 'complete') {
      // Math.max to prevent any race condition when loading is reset
      // ie another request could complete just after reset which then make state -1
      state.requestsInProgress = Math.max(--state.requestsInProgress, 0);
    }
  }
  if (action.type === SpinnerReset.type || state.requestsInProgress === 0) {
    state = initialState;
  }

  return {...state};
}
