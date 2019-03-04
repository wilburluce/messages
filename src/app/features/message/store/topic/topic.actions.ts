import { BaseAction, ServiceActionConfig, BaseServiceAction } from '../../../../shared/base.actions';
import { Topic, TopicList } from './topic.model';

export class FetchRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Topic', 'fetch', 'request'];
  public static type = BaseAction.registerType(FetchRequest.config);
  constructor() {
    super(FetchRequest.config);
  }
}

export class FetchComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Topic', 'fetch', 'complete'];
  public static type = BaseAction.registerType(FetchComplete.config);
  constructor(public topic: Topic) {
    super(FetchComplete.config);
  }
}

export class FetchListRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Topic', 'fetchList', 'request'];
  public static type = BaseAction.registerType(FetchListRequest.config);
  constructor() {
    super(FetchListRequest.config);
  }
}

export class FetchListComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Topic', 'fetchList', 'complete'];
  public static type = BaseAction.registerType(FetchListComplete.config);
  constructor(public topicList: TopicList) {
    super(FetchListComplete.config);
  }
}

export class SaveRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Topic', 'save', 'request'];
  public static type = BaseAction.registerType(SaveRequest.config);
  constructor() {
    super(SaveRequest.config);
  }
}

export class SaveComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Topic', 'save', 'complete'];
  public static type = BaseAction.registerType(SaveComplete.config);
  constructor(public topic: Topic) {
    super(SaveComplete.config);
  }
}


