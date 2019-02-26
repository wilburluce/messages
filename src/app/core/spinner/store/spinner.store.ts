import { Injectable } from '@angular/core';
import { select, Store, createFeatureSelector } from '@ngrx/store';
import * as spinner from './spinner.reducer';
import { Observable } from 'rxjs';

export const getSpinnerState = createFeatureSelector<spinner.State>('spinner');

@Injectable()
export class SpinnerStore {
    constructor(public store: Store<spinner.State>) {}
    public selectSpinner(): Observable<spinner.State> {
        return this.store.pipe(
            select(state => state.spinner)
        );
    }
}


