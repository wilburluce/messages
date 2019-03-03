import { Component, OnInit } from '@angular/core';
import { UserStore } from './shared/store/user/user.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public userStore: UserStore) {
    userStore.getList();
  }
  public ngOnInit(): void {

  }
}
