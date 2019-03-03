import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTopic from './topic.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TopicEffects } from './topic.effects';
import { TopicStore } from './topic.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('topic', fromTopic.reducer),
    EffectsModule.forFeature([TopicEffects]),
  ],
  providers: [
    TopicStore
  ]
})
export class TopicModule { }
