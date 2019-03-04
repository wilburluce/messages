import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicDashboardComponent } from './topic-dashboard/topic-dashboard.component';
import { MessageDashboardComponent } from './message-dashboard/message-dashboard.component';

const messageRoutes: Routes = [
  { path: '', component: TopicDashboardComponent },
  {
    path: ':topicId',
    component: MessageDashboardComponent
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
