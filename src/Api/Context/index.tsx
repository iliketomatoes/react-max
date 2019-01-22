import * as React from 'react';
import { ApiContextInterface } from 'src/Api/types';


const defaultSettings: ApiContextInterface = {
  accessToken: null,
  logout: () => {}, // noop
};

const ApiContext = React.createContext<ApiContextInterface>(defaultSettings);

export function ApiProvider({ ...props }: React.ProviderProps<ApiContextInterface>) {
  return (
    <ApiContext.Provider
      value={{
        userId: props.value.userId,
        accessToken: props.value.accessToken,
        logout: props.value.logout
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}

export const ApiConsumer = ApiContext.Consumer;
