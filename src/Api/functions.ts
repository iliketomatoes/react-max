import { Observable, Observer } from 'rxjs';
import { request } from 'graphql-request';
import { QueryPayload } from './types';
import { apiEndpoint } from './config';

export const makeQuery = <T extends any>(query: string): Observable<QueryPayload<T>> => {
  return Observable.create((observer: Observer<QueryPayload<T>>) => {
    request(apiEndpoint, query)
    .then((res: T) => {
      observer.next({
        started: false,
        failed: false,
        data: res
      });
    })
    .catch((error) => {
      observer.error(error);
    });
  });
};
