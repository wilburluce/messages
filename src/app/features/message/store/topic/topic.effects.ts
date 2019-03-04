import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from './topic.actions';
import { map, delay } from 'rxjs/operators';
import { getMockTopicList } from './topic.mock';

@Injectable()
export class TopicEffects {

  @Effect()
  public fetchTopic$ = this.actions$.pipe(
    ofType(actions.FetchRequest.type),
    delay(2000),
    map(action => new actions.FetchComplete({name: 'Mark', id: 4})));

  @Effect()
  public fetchTopicList$ = this.actions$.pipe(
    ofType(actions.FetchListRequest.type),
    delay(2000),
    map(action => new actions.FetchListComplete(getMockTopicList()))
  );

  constructor(private actions$: Actions) {
  }

}
