import * as React from 'react';

interface ApiContextInterface {
  userId?: Nullable<number>;
  accessToken: Nullable<string>;
}

const defaultSettings: ApiContextInterface = {
  accessToken: null,
};

const ApiContext = React.createContext<ApiContextInterface>(defaultSettings);

export function ApiProvider({ ...props }: React.ProviderProps<ApiContextInterface>) {
  return (
    <ApiContext.Provider
      value={{
        userId: props.value.userId,
        accessToken: props.value.accessToken
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}

export const ApiConsumer = ApiContext.Consumer;
