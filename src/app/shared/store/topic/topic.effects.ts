import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TopicRequest, TopicComplete } from './topic.actions';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class TopicEffects {

  @Effect()
  public fetchTopic$ = this.actions$.pipe(
    ofType(TopicRequest.type),
    delay(2000),
    map(action => new TopicComplete({name: 'Mark', id: 4})));

  @Effect()
  public fetchTopicList$ = this.actions$.pipe(
    ofType(TopicRequest.type),
    delay(2000),
    map(action => new TopicComplete({name: 'Mark', id: 4})));

  constructor(private actions$: Actions) {}

}
