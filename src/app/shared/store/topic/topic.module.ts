import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTopic from './Topic.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TopicEffects } from './Topic.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('topic', fromTopic.reducer),
    EffectsModule.forFeature([TopicEffects]),
  ]
})
export class TopicModule { }
