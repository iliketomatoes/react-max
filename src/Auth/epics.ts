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
      delay(1000), // Asynchronously wait 1000ms then continue
      map((action: Action<LoginRequestPayload>) => {

        // Execute fake login by creating a fake access_token
        return loginRequest.done({
          params: action.payload,
          result: {
            access_token: 'ciaof334r3rf233'
          }
        });

        })
    );
