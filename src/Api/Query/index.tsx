import * as React from 'react';
import { ApiConsumer } from 'src/Api/Context';
import { QueryParams } from 'src/Api/types';
import ApiQueryViewer from './viewer';


interface Props {
  children: (params: QueryParams) => React.ReactNode;
}

export default function ApiQuery({ ...props }: Props) {
  return (
    <ApiConsumer>
      {({ accessToken, userId, logout }) => (
        <div>
          <ApiQueryViewer meta={{ accessToken, userId, logout }}>
            {props.children}
          </ApiQueryViewer>
        </div>
      )}
    </ApiConsumer>
  );
}
