import { BaseAction, ServiceActionConfig, BaseServiceAction } from '../../base.actions';
import { User } from './user.model';

export class UserRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['User', 'fetch', 'request'];
  public static type = BaseAction.registerType(UserRequest.config);
  constructor() {
    super(UserRequest.config);
  }
}

export class UserComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['User', 'fetch', 'complete'];
  public static type = BaseAction.registerType(UserComplete.config);
  constructor(public user: User) {
    super(UserComplete.config);
  }
}
