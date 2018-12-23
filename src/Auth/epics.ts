import { Observable } from 'rxjs';
import { StateObservable } from 'redux-observable';
import { delay, map } from 'rxjs/operators';
import { Action } from 'typescript-fsa';
import { ofAction } from 'typescript-fsa-redux-observable';
import { RootStoreState } from 'src/rootReducer';

import { loginRequest, LoginRequestPayload } from './actions';

export const loginEpic = (
    action$: Observable<Action<LoginRequestPayload>>,
    state: StateObservable<RootStoreState>) => action$.pipe(
      ofAction(loginRequest.started),
      delay(700), // Asynchronously wait 700ms then continue
      map((action: Action<LoginRequestPayload>) => {

        // Execute fake login by creating a fake accessToken
        return loginRequest.done({
          params: action.payload,
          result: 'hardcoded-fake-token-f334r3rf233'
        });

        })
    );
