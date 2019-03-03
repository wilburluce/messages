import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from './message.actions';
import { map, delay } from 'rxjs/operators';
import { getMockMessageList } from './message.mock';

@Injectable()
export class MessageEffects {

  @Effect()
  public fetchMessage$ = this.actions$.pipe(
    ofType(actions.FetchRequest.type),
    delay(2000),
    map(action => new actions.FetchComplete(undefined)));

  @Effect()
  public fetchMessageList$ = this.actions$.pipe(
    ofType(actions.FetchListRequest.type),
    delay(2000),
    map(action => new actions.FetchListComplete(getMockMessageList()))
  );

  constructor(private actions$: Actions) {
  }

}
