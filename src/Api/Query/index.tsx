import * as React from 'react';
import { Observable } from 'rxjs';
import { ApiConsumer } from 'src/Api/Context';
import { QueryPayload } from 'src/Api/types';
import ApiQuerySubscriber from './subscriber';


interface Props<T> {
  query: Observable<QueryPayload<T>>;
  defaultValue: T;
  children: (params: QueryPayload<T>) => React.ReactNode;
}

export default function ApiQuery<T>({ ...props }: Props<T>) {

  return (
    <ApiConsumer>
      {({ accessToken, userId, logout }) => (
        <ApiQuerySubscriber
            meta={{ accessToken, userId, logout }}
            query={props.query}
            defaultValue={props.defaultValue}>
          {props.children}
        </ApiQuerySubscriber>
      )}
    </ApiConsumer>
  );
}
