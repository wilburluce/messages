import { BaseAction, ServiceActionConfig, BaseServiceAction } from '../../base.actions';
import { User, UserList } from './user.model';

export class FetchRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['User', 'fetch', 'request'];
  public static type = BaseAction.registerType(FetchRequest.config);
  constructor() {
    super(FetchRequest.config);
  }
}

export class FetchComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['User', 'fetch', 'complete'];
  public static type = BaseAction.registerType(FetchComplete.config);
  constructor(public user: User) {
    super(FetchComplete.config);
  }
}

export class FetchListRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['User', 'fetchList', 'request'];
  public static type = BaseAction.registerType(FetchRequest.config);
  constructor() {
    super(FetchListRequest.config);
  }
}

export class FetchListComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['User', 'fetchList', 'complete'];
  public static type = BaseAction.registerType(FetchComplete.config);
  constructor(public userList: UserList) {
    super(FetchListComplete.config);
  }
}

export class SaveRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['User', 'save', 'request'];
  public static type = BaseAction.registerType(SaveRequest.config);
  constructor() {
    super(SaveRequest.config);
  }
}

export class SaveComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['User', 'save', 'complete'];
  public static type = BaseAction.registerType(SaveComplete.config);
  constructor(public user: User) {
    super(SaveComplete.config);
  }
}


