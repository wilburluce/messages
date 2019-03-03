import { Observable } from 'rxjs';
import { select, createFeatureSelector, Store } from '@ngrx/store';
import { TopicList, Topic } from './topic.model';
import { Injectable } from '@angular/core';
import * as actions from './topic.actions';
import * as topicReducer from './topic.reducer';
import { map } from 'rxjs/operators';

export const getTopicState = createFeatureSelector<topicReducer.State>('topic');

@Injectable()
export class TopicStore {
  constructor(public store: Store<any>) {
  }

  public getList(): void {
    this.store.dispatch(new actions.FetchListRequest());
  }

  public selectState(): Observable<topicReducer.State> {
    return this.store.pipe(select(getTopicState));
  }

  public selectList(): Observable<TopicList> {
    return this.selectState().pipe(
      map(topic => topicReducer.selectAll(topic))
    );
  }

  public selectNames(): Observable<string[]> {
    return this.selectList().pipe(
      map(topicList => topicList.map(topic => topic.name))
    );
  }

  public saveTopic(): void {
    this.store.dispatch(new actions.SaveRequest());
  }

  public selectByTopicId(topicId: number): Observable<Topic> {
    return this.selectState().pipe(
      map(topic => topicReducer.selectEntities(topic)),
      map(entities => entities[topicId])
    );
  }
}
