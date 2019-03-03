import { Component, OnInit } from '@angular/core';
import { UserStore } from './shared/store/user/user.store';
import { TopicStore } from './shared/store/topic/topic.store';
import { MessageStore } from './shared/store/message/message.store';
import { TopicList } from './shared/store/topic/topic.model';
import { UserList } from './shared/store/user/user.model';
import { Observable, combineLatest } from 'rxjs';
import { MessageList } from './shared/store/message/message.model';
import { AuthService } from './auth.service';

interface ViewData {
  users: UserList;
  topics: TopicList;
  messages: MessageList;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public viewData: Observable<ViewData>;
  constructor(
    public userStore: UserStore,
    public topicStore: TopicStore,
    public messageStore: MessageStore,
    public auth: AuthService
  ) {
    userStore.getList();
    topicStore.getList();
    messageStore.getList();
  }

  public ngOnInit(): void {
    this.viewData = combineLatest<ViewData>(
      this.userStore.selectList(),
      this.topicStore.selectList(),
      this.messageStore.selectList(),
    );
  }
}
