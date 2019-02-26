import { async, TestBed } from '@angular/core/testing';
import spinnerReducer from './spinner.reducer';
import { SpinnerReset } from './spinner.actions';

export class TestGridRequest extends BaseServiceAction {
    public static config = new ServiceActionConfig('testGrid', ServiceOperation.fetch, ServicePhase.request);
    public static type = BaseAction.registerType(TestGridRequest.config);
    constructor() {
        super(TestGridRequest.config);
    }
}
export class TestGridComplete extends BaseServiceAction {
    public static config = new ServiceActionConfig('testGrid', ServiceOperation.fetch, ServicePhase.complete);
    public static type = BaseAction.registerType(TestGridComplete.config);
    constructor(public grid: {}) {
        super(TestGridComplete.config);
    }
}

describe('Spinner reducer', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [spinnerReducer]
        });
    });

    it('should return the number of pending requests after reset', async(() => {
        const initialState = {
            requestsInProgress: 0,
            message: 'Spinner...',
            name: 'inline'
        };
        const action = new SpinnerReset();
        const state = spinnerReducer(initialState, action);
        expect(state.requestsInProgress).toEqual(0);
    }));

    it('should return the number of pending requests after grid request', async(() => {
        const initialState = {
            requestsInProgress: 0,
            message: 'Spinner...'
        };
        const action = new TestGridRequest();
        const state = spinnerReducer(initialState, action);
        expect(state.requestsInProgress).toEqual(1);
        expect(state.message).toEqual('Loading...');
    }));
    it('should clear the name when requestsInProgress is 0', async(() => {
        const initialState = {
            requestsInProgress: 0,
            message: 'Whatever',
            name: 'inline'
        };
        const action = new TestGridComplete({});
        let state = spinnerReducer(initialState, action);
        expect(state.name).toBeFalsy();

        state = spinnerReducer(undefined, action);
        expect(state.name).toBeFalsy();
    }));

    it('should make a custom named spinner', async(() => {
        const action = new SpinnerSetName('mockName');
        const state = spinnerReducer({ requestsInProgress: 1 }, action);
        expect(state.name).toBe('mockName');
    }));
});
