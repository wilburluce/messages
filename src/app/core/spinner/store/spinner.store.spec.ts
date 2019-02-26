import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { elementAt, take } from 'rxjs/operators';
import { reducers } from '../../../../app.reducers';
import { LineItemGridRequest } from '../../../../features/campaign/line-item/store/line-item.actions';
import { SpinnerStore, spinnerStoreFactory } from './spinner.store';

describe('SpinnerStore', () => {
    let spinnerStore: SpinnerStore;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SpinnerStore],
            imports: [StoreModule.forRoot(reducers)]
        });
        spinnerStore = TestBed.get(SpinnerStore);
    });

    it('should select a spinner', () => {
        spinnerStore.selectSpinner()
            .pipe(elementAt(1), take(1))
            .subscribe(s => {
                expect(s.requestsInProgress).toEqual(1);
                expect(s.message).toEqual('Loading...');
            });
        spinnerStore.store.dispatch(new LineItemGridRequest());
    });

    it('should return a spinner instance', () => {
        const spinner = spinnerStoreFactory(new Store(null, null, null));
        expect(spinner instanceof SpinnerStore).toBeTruthy();
    });

});
