import { action } from 'typesafe-actions';
import { Epic } from 'redux-observable';
// import { Epic, ActionsObservable } from 'redux-observable';
import { filter, mapTo, delay } from 'rxjs/operators';
import { ActionTypes } from '../actions/';
// import { ajax } from 'rxjs/ajax';

// FIXME
export const logInEpic: Epic = (action$) => action$.pipe(
  filter((action) => action.type === ActionTypes.auth.LOG_IN),
  delay(1000),
  mapTo(action(ActionTypes.auth.LOG_IN))
);
