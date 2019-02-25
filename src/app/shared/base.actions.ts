import { Action } from '@ngrx/store';

/*
 *  BaseAction
 *  This is the base class for creating ngrx actions.
 *
 *  Each subclass of BaseAction must add a static property named type whose value is set by calling registerType.
 *  registerType checks for duplicate names, adds the type to the set of actions and returns the type string.
 *  Putting the type as a static property eliminates the need for separate action type enums.
 */
export abstract class BaseAction implements Action {
  private static actionTypes = new Set<string>();
  public readonly type: string;

  public static registerType(config: any[]): string {
    const typeStr = config.join();
    if (BaseAction.actionTypes.has(typeStr)) {
      throw new Error(`Duplicate action type: '${typeStr}'`);
    }
    BaseAction.actionTypes.add(typeStr);
    return typeStr;
  }

  constructor(type: string) {
    if (!BaseAction.actionTypes.has(type)) {
      throw new Error(`Your action type is not registered, see base.actions.ts for more info: '${type}'`);
    }
    this.type = type;
  }
}

export type ServiceEntity = 'user' | 'message' | 'topic';

export type ServiceOperation = 'fetch' | 'save' | 'delete' ;

export type ServicePhase = 'request' | 'complete' | 'error';

export type ServiceActionConfig = [ServiceEntity, ServiceOperation, ServicePhase];

/*  BaseServiceAction
 *  base class for all service/http actions. notice that the type instance property is a string computed from
 *  the types that define the action. The identical type string is also a static member in each action class..
 *  this is so we can get access the type property on the class e.g.
 *  ofType(SaltRequest.type) vs. ofType(SaltRequestActionTypes.fetchRequest).
 */
export class BaseServiceAction extends BaseAction {
  public readonly entity: ServiceEntity;
  public readonly operation: ServiceOperation;
  public readonly opStatus: ServicePhase;

  public get spinnerMessage(): string {
    let message = '';
    switch (this.operation) {
      case 'fetch':
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

  constructor(config: ServiceActionConfig) {
    super(BaseAction.registerType(config));
    this.entity = config[0];
    this.operation = config[1];
    this.opStatus = config[2];
  }
}
