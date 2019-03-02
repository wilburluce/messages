import { Action } from '@ngrx/store';
import { User } from './store/user/user.model';

export type ServiceEntity = 'User' | 'Message' | 'Topic';

export type ServiceOperation = 'fetch' | 'fetchList' | 'save' | 'delete' ;

export type ServicePhase = 'request' | 'complete' | 'error';

export type ServiceActionConfig = [ServiceEntity, ServiceOperation, ServicePhase];

export type ActionConfig = ServiceActionConfig | string[];

/*
 *  BaseAction
 *  This is the base class for creating ngrx actions.
 *
 *  Each subclass of BaseAction must add a static property named type whose value is set by calling registerType.
 *  registerType checks for duplicate types, adds the type to the set of actions and returns the type string.
 *  Putting the type as a static property eliminates the need for separate action type enums.
 */

export abstract class BaseAction implements Action {
  // public static type: string; -- here for doc purposes
  private static actionTypes = new Set<string>();
  public readonly type: string;

  public static makeTypeString(config: ActionConfig): string {
    return config.join();
  }

  public static registerType(config: ActionConfig): string {
    const typeStr = this.makeTypeString(config);
    if (BaseAction.actionTypes.has(typeStr)) {
      throw new Error(`Duplicate action type: '${typeStr}'`);
    }
    BaseAction.actionTypes.add(typeStr);
    return typeStr;
  }

  constructor(config: ActionConfig) {
    const type = BaseAction.makeTypeString(config);
    if (!BaseAction.actionTypes.has(type)) {
      throw new Error(`Your action type is not registered, see base.actions.ts for more info: '${type}'`);
    }
    this.type = type;
  }
}

/**
 * BaseServiceAction
 *
 * ofType(BookFetchRequest.type) vs. ofType(BookRequestActionTypes.fetchRequest).
 */
export class BaseServiceAction extends BaseAction {

  public get operation(): ServiceOperation {
    return this.config[1];
  }
  public get phase(): ServicePhase {
    return this.config[2];
  }

  public spinnerMessage(): string {
    let message = '';
    switch (this.operation) {
      case 'fetch':
      case 'fetchList':
        message = 'Loading...';
        break;
      case 'save':
        message = 'Saving...';
        break;
      case 'delete':
        message = 'Deleting...';
        break;
    }
    return message;
  }

  constructor(public config: ServiceActionConfig) {
    super(config);
    this.config = config;
  }
}

class TestAction extends BaseServiceAction {
  public static config: ServiceActionConfig = ['Topic', 'fetch', 'complete'];
  public static type = BaseAction.registerType(TestAction.config);

  constructor(user: User) {
    super(TestAction.config);
  }
}

