import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMessage from './message.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MessageEffects } from './message.effects';
import { MessageStore } from './message.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('message', fromMessage.reducer),
    EffectsModule.forFeature([MessageEffects]),
  ],
  providers: [
    MessageStore
  ]
})
export class MessageModule { }
