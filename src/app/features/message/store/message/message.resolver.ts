import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MessageStore } from './message.store';
import { Observable } from 'rxjs';
import { MessageList } from './message.model';
import { filter } from 'rxjs/operators';

@Injectable()
export class MessageResolver implements Resolve<MessageList> {
  constructor(private store: MessageStore) { }

  public resolve(): Observable<MessageList> {

    this.store.getList();

    return this.store.selectList().pipe(
      filter(list => !!list)
    );
  }
}
