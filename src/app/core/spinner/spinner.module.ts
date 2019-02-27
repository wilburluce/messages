import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as spinner from './store/spinner.reducer';
import { SpinnerComponent } from './spinner.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { SpinnerStore } from './store/spinner.store';
@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature('spinner', spinner.reducer )
  ],
  providers: [
    SpinnerStore
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerModule { }
