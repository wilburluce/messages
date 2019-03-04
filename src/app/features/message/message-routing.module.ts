import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicDashboardComponent } from './components/topic-dashboard/topic-dashboard.component';
import { MessageDashboardComponent } from './components/message-dashboard/message-dashboard.component';
import { TopicResolver } from './store/topic/topic.resolver';
import { MessageResolver } from './store/message/message.resolver';

const messageRoutes: Routes = [
  {
    path: '',
    component: TopicDashboardComponent,
    resolve: {topicList: TopicResolver}
  },
  {
    path: ':topicId',
    component: MessageDashboardComponent,
    resolve: {messageList: MessageResolver}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(messageRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MessageRoutingModule {}
