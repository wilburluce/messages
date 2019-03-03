import { Observable } from 'rxjs';
import { select, createFeatureSelector, Store } from '@ngrx/store';
import { UserList, User } from './user.model';
import { Injectable } from '@angular/core';
import * as actions from './user.actions';
import * as userReducer from './user.reducer';
import { map } from 'rxjs/operators';

export const getUserState = createFeatureSelector<userReducer.State>('user');

@Injectable()
export class UserStore {
  constructor(public store: Store<any>) {
  }

  public getList(): void {
    this.store.dispatch(new actions.FetchListRequest());
  }

  public selectState(): Observable<userReducer.State> {
    return this.store.pipe(select(getUserState));
  }

  public selectUserList(): Observable<UserList> {
    return this.selectState().pipe(
      map(user => userReducer.selectAll(user))
    );
  }

  public selectUserNames(): Observable<string[]> {
    return this.selectUserList().pipe(
      map(userList => userList.map(user => user.name))
    );
  }

  public saveUser(): void {
    this.store.dispatch(new actions.SaveRequest());
  }

  public selectUserByUserId(userId: number): Observable<User> {
    return this.selectState().pipe(
      map(user => userReducer.selectEntities(user)),
      map(entities => entities[userId])
    );
  }
}
