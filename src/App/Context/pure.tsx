import * as React from 'react';

/* Import context providers */
import { ApiProvider } from 'src/Api/Context';

import { Props, Actions } from './index';

interface ContextProps extends Props, Actions {
  children: React.ReactNode;
}

export default function AppContext(props: ContextProps ) {
  return (
    <ApiProvider value={{ accessToken: props.accessToken, logout: props.onLogout }}>
      {props.children}
    </ApiProvider>
  );
}
