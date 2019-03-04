import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../../shared/store/user/user.module';
import { TopicModule } from '../../shared/store/topic/topic.module';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { TopicDashboardComponent } from './topic-dashboard/topic-dashboard.component';
import { MessageRoutingModule } from './message-routing.module';

@NgModule({
  declarations: [
    TopicDashboardComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    TopicModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MessageRoutingModule
  ],
  providers: [],
  // exports: [TopicListComponent]
})
export class MessageModule {
}

