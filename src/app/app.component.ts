import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserRequest } from './shared/store/user/user.actions';
import { Observable } from 'rxjs';
import { User } from './shared/store/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public user$: Observable<User>;

  constructor(public store: Store<any>) {
    store.dispatch(new UserRequest());
  }
  public ngOnInit(): void {
    this.user$ = this.store.pipe(select('user'));
  }
}
