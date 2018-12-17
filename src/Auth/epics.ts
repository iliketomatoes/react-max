import {Action} from 'redux';
import {Observable} from 'rxjs';
import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

export const loginEpic = (action$: Observable<Action>) => action$.pipe(
  ofType('PING'),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo({ type: 'PONG' })
);
