import { ajax, AjaxResponse } from 'rxjs/ajax';
import browserStorage from './browserStorage';

import { Observable, Observer } from 'rxjs';
import { LoginRequest } from '../models';
import { delay } from 'rxjs/operators';

// Return "response" from the API. If an error happens,
// return an empty array.
// const requestApi = ajax('/api/data').pipe(
//   map(res => {
//     if (!res.response) {
//       throw new Error('Value expected!');
//     }
//     return res.response;
//   }),
//   catchError(err => of([]))
// );

// const requestApi = <T>(endpoint: string, payload: T, callBack?: Function): Observable<string> => {
//   return Observable.create((observer: Observer<string>) => {
//     observer.error('error');
//   });
// };

export const loginApi = (endpoint: string, payload: LoginRequest, callBack?: Function): Observable<boolean> => {

  const allowedUsers: LoginRequest[] = [
    {
      email: 'reactdashboard@bynd.com',
      password: 'da13bati9'
    }
  ];

  const login$ = Observable.create((observer: Observer<boolean>) => {

    const userIsAllowed = allowedUsers.find(user => {
      return user.email === payload.email && user.password === payload.password;
    });

    if (userIsAllowed) {
      observer.next(true);
    } else {
      observer.next(false);
    }

  });

  return login$.pipe(delay(500));
};

// call
export const callApi = ({ endpoint = '', params = {}, method = 'get' } = {}): Promise<AjaxResponse> => {

  const url = `/api/${endpoint}`;
  const headers = browserStorage.get('isLoggedIn');

  return ajax({
    method,
    url,
    body: params,
    headers: headers && { 'X-PA-AUTH-TOKEN': headers }
  }).toPromise();

};

export default callApi;

// // Usage:
// apiData.subscribe({
//   next(x) { console.log('data: ', x); },
//   error(err) { console.log('errors already caught... will not run'); }
// });
