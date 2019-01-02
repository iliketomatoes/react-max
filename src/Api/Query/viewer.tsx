import * as React from 'react';
import { QueryParams, ApiContextInterface } from 'src/Api/types';


interface Props {
  meta: ApiContextInterface;
  children: (params: QueryParams) => React.ReactNode;
}

export default function ApiQueryViewer({ ...props }: Props) {

  const queryParams: QueryParams = {
    started: true,
    failed: false,
    done: false,
  };

  const { meta } = props;

  return (
    <div>
      <div>{meta.accessToken}</div>
      <div>{meta.userId}</div>
      {props.children(queryParams)}
    </div>
  );
}
