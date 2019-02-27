import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as spinner from './store/spinner.reducer';
import { SpinnerComponent } from './spinner.component';
@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('spinner', spinner.reducer )
  ]
})
export class SpinnerModule { }
