import { Observable } from 'rxjs';
import { select, createFeatureSelector, Store } from '@ngrx/store';
import { MessageList, Message } from './message.model';
import { Injectable } from '@angular/core';
import * as actions from './message.actions';
import * as messageReducer from './message.reducer';
import { map } from 'rxjs/operators';

export const getMessageState = createFeatureSelector<messageReducer.State>('message');

@Injectable()
export class MessageStore {
  constructor(public store: Store<any>) {
  }

  public getList(): void {
    this.store.dispatch(new actions.FetchListRequest());
  }

  public selectState(): Observable<messageReducer.State> {
    return this.store.pipe(select(getMessageState));
  }

  public selectMessageList(): Observable<MessageList> {
    return this.selectState().pipe(
      map(message => messageReducer.selectAll(message))
    );
  }

  public selectMessageNames(): Observable<string[]> {
    return this.selectMessageList().pipe(
      map(messageList => messageList.map(message => message.name))
    );
  }

  public saveMessage(): void {
    this.store.dispatch(new actions.SaveRequest());
  }

  public selectMessageByMessageId(messageId: number): Observable<Message> {
    return this.selectState().pipe(
      map(message => messageReducer.selectEntities(message)),
      map(entities => entities[messageId])
    );
  }
}
