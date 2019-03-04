import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../../shared/store/user/user.module';
import { TopicStoreModule } from './store/topic/topic-store.module';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule, MatSortModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { TopicDashboardComponent } from './components/topic-dashboard/topic-dashboard.component';
import { MessageRoutingModule } from './message-routing.module';
import { MessageStoreModule } from './store/message/message-store.module';
import { MessageDashboardComponent } from './components/message-dashboard/message-dashboard.component';

@NgModule({
  declarations: [
    TopicDashboardComponent,
    MessageDashboardComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    TopicStoreModule,
    MessageStoreModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MessageRoutingModule
  ],
})
export class MessageModule {
}

