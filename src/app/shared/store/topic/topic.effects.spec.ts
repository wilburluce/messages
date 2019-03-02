import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TopicEffects } from './Topic.effects';

describe('TopicEffects', () => {
  let actions$: Observable<any>;
  let effects: TopicEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TopicEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TopicEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
