import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserRequest, UserComplete } from './user.actions';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class UserEffects {

  @Effect()
  public fetchUser$ = this.actions$.pipe(
    ofType(UserRequest.type),
    delay(2000),
    map(action => new UserComplete({name: 'Mark', id: 4})));

  @Effect()
  public fetchUserList$ = this.actions$.pipe(
    ofType(UserRequest.type),
    delay(2000),
    map(action => new UserComplete({name: 'Mark', id: 4})));

  constructor(private actions$: Actions) {}

}
