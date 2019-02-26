import { BaseAction, ActionConfig } from '../../../shared/base.actions';

export class SpinnerReset extends BaseAction {
  public static config: ActionConfig = ['Spinner', 'reset'];
  public static type = BaseAction.registerType(SpinnerReset.config);
  constructor() {
    super(SpinnerReset.config);
  }
}

