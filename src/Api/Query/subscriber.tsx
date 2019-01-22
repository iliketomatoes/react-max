import * as React from 'react';
import { Observable, throwError } from 'rxjs';
import { map, catchError, withLatestFrom } from 'rxjs/operators';
import { useObservable } from 'rxjs-hooks';
import { QueryPayload, ApiContextInterface } from 'src/Api/types';

interface Props<T> {
  query: Observable<QueryPayload<T>>;
  defaultValue: T;
  meta: ApiContextInterface;
  children: (params: QueryPayload<T>) => React.ReactNode;
}

export default function ApiQuerySubscriber<T>({ ...props }: Props<T>) {

  const { meta, query, defaultValue } = props;

  const queryResults = useObservable((state$) => {
      return query.pipe(
        withLatestFrom(state$),
        map(([value, _prev]) => {
          console.log(_prev);
          console.log(value);
          return value;
        }),
        catchError(err => {
          return throwError(err);
        })
      );
    },
    {
      data: defaultValue,
      started: true,
      failed: false
    }
  );

  return (
    <div>
      <div>{meta.accessToken}</div>
      <div>{meta.userId}</div>
      {props.children(queryResults)}
    </div>
  );
}
