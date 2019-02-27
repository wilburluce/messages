import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { elementAt, take } from 'rxjs/operators';
import { SpinnerStore } from './spinner.store';
import * as spinner from './spinner.reducer';
import { UserRequest } from '../../../shared/store/user/user.actions';

describe('SpinnerStore', () => {
    let spinnerStore: SpinnerStore;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SpinnerStore],
            imports: [
              StoreModule.forRoot([]),
              StoreModule.forFeature('spinner', spinner.reducer)
            ]
        });
        spinnerStore = TestBed.get(SpinnerStore);
    });

    it('should select a spinner', () => {
        spinnerStore.selectSpinner()
            .pipe(elementAt(1), take(1))
            .subscribe(s => {
                expect(s.requests).toEqual(1);
                expect(s.message).toEqual('Loading...');
            });
        spinnerStore.store.dispatch(new UserRequest());
    });

});
