import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from './user.actions';
import { map, delay } from 'rxjs/operators';
import { getMockUserList } from './user.mock';

@Injectable()
export class UserEffects {

  @Effect()
  public fetchUser$ = this.actions$.pipe(
    ofType(actions.FetchRequest.type),
    delay(2000),
    map(action => new actions.FetchComplete({name: 'Mark', id: 4})));

  @Effect()
  public fetchUserList$ = this.actions$.pipe(
    ofType(actions.FetchListRequest.type),
    delay(2000),
    map(action => new actions.FetchListComplete(getMockUserList()))
  );

  constructor(private actions$: Actions) {
  }

}
