import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTopic from './topic.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TopicEffects } from './topic.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('topic', fromTopic.reducer),
    EffectsModule.forFeature([TopicEffects]),
  ]
})
export class TopicModule { }
