import { Epic } from 'redux-observable';
// import { Epic, ActionsObservable } from 'redux-observable';
import { filter, mapTo, delay } from 'rxjs/operators';
import { ActionTypes } from '../actions/';
// import { ajax } from 'rxjs/ajax';

export const pingEpic: Epic = (action$) => action$.pipe(
  filter((action) => action.type === ActionTypes.PING),
  delay(1000),
  mapTo({ type: ActionTypes.PONG })
);
