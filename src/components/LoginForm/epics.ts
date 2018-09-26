import { Epic } from 'redux-observable';
// import { Epic, ActionsObservable } from 'redux-observable';
import { filter, mapTo, delay } from 'rxjs/operators';
import { LoginFormActionTypes } from './types';
// import { ajax } from 'rxjs/ajax';
// import { signIn } from './actions';


export const pingEpic: Epic = (action$) => action$.pipe(
  filter((action) => action.type === LoginFormActionTypes.PING),
  delay(1000),
  mapTo({ type: LoginFormActionTypes.PONG })
);
