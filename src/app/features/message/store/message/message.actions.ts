import { BaseAction, ServiceActionConfig, BaseServiceAction } from '../../../../shared/base.actions';
import { Message, MessageList } from './message.model';

export class FetchRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Message', 'fetch', 'request'];
  public static type = BaseAction.registerType(FetchRequest.config);
  constructor() {
    super(FetchRequest.config);
  }
}

export class FetchComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Message', 'fetch', 'complete'];
  public static type = BaseAction.registerType(FetchComplete.config);
  constructor(public message: Message) {
    super(FetchComplete.config);
  }
}

export class FetchListRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Message', 'fetchList', 'request'];
  public static type = BaseAction.registerType(FetchListRequest.config);
  constructor() {
    super(FetchListRequest.config);
  }
}

export class FetchListComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Message', 'fetchList', 'complete'];
  public static type = BaseAction.registerType(FetchListComplete.config);
  constructor(public messageList: MessageList) {
    super(FetchListComplete.config);
  }
}

export class SaveRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Message', 'save', 'request'];
  public static type = BaseAction.registerType(SaveRequest.config);
  constructor() {
    super(SaveRequest.config);
  }
}

export class SaveComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Message', 'save', 'complete'];
  public static type = BaseAction.registerType(SaveComplete.config);
  constructor(public message: Message) {
    super(SaveComplete.config);
  }
}


