import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TopicStore } from './topic.store';
import { Observable } from 'rxjs';
import { TopicList } from './topic.model';
import { filter } from 'rxjs/operators';

@Injectable()
export class TopicResolver implements Resolve<TopicList> {
  constructor(private store: TopicStore) { }

  public resolve(): Observable<TopicList> {

    this.store.getList();

    return this.store.selectList().pipe(
      filter(list => !!list)
    );
  }
}
