import { Observable, Observer } from 'rxjs';
import { QueryPayload } from 'src/Api/types';

export const makeQuery = <T extends any>(query: string): Observable<QueryPayload<T>> => {
  return Observable.create((observer: Observer<QueryPayload<T>>) => {
    fetch('https://countries.trevorblades.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: query})
    })
    .then(response => response.json())
    .then((res: {data: T}) => {
      observer.next({
        started: false,
        failed: false,
        data: res.data
      });
    })
    .catch((error) => {
      observer.error(error);
    });
  });
};
