import { async, TestBed } from '@angular/core/testing';
import * as spinner from './spinner.reducer';
import { SpinnerReset } from './spinner.actions';
import { BaseServiceAction, BaseAction, ServiceActionConfig } from '../../../shared/base.actions';

export class TestRequest extends BaseServiceAction {
    public static config: ServiceActionConfig = ['User', 'fetch', 'request'];
    public static type = BaseAction.registerType(TestRequest.config);
    constructor() {
        super(TestRequest.config);
    }
}
export class TestComplete extends BaseServiceAction {
    public static config: ServiceActionConfig = ['User', 'fetch', 'complete'];
    public static type = BaseAction.registerType(TestComplete.config);
    constructor(public user: {}) {
        super(TestComplete.config);
    }
}

describe('Spinner reducer', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [spinner.reducer]
        });
    });

    it('should return the number of pending requests after reset', () => {
        const initialState = {
            requests: 0,
            message: 'Spinner...'
        };
        const action = new SpinnerReset();
        const state = spinner.reducer(initialState, action);
        expect(state.requests).toEqual(0);
    });

    it('should return the number of pending requests after user request', () => {
        const initialState = {
            requests: 0,
            message: 'Spinner...'
        };
        const action = new TestRequest();
        const state = spinner.reducer(initialState, action);
        expect(state.requests).toEqual(1);
        expect(state.message).toEqual('Loading...');
    });
});
