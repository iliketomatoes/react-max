import * as React from 'react';

/* Import context providers */
import { ApiProvider } from 'src/Api/Context';

import { Props } from './index';

interface ContextProps extends Props {
  children: React.ReactNode;
}

export default function AppContext(props: ContextProps ) {
  return (
    <ApiProvider value={{ accessToken: props.accessToken }}>
      {props.children}
    </ApiProvider>
  );
}
