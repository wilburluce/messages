import { BaseAction, ServiceActionConfig, BaseServiceAction } from '../../base.actions';
import { Topic } from './Topic.model';

export class TopicRequest extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Topic', 'fetch', 'request'];
  public static type = BaseAction.registerType(TopicRequest.config);
  constructor() {
    super(TopicRequest.config);
  }
}

export class TopicComplete extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Topic', 'fetch', 'complete'];
  public static type = BaseAction.registerType(TopicComplete.config);
  constructor(public topic: Topic) {
    super(TopicComplete.config);
  }
}
