export interface ApiContextInterface {
  accessToken: Nullable<string>;
  logout: () => void;
  userId?: Nullable<number>;
}

export interface QueryPayload<T extends any> {
  data: T;
  failed: boolean;
  started: boolean;
}
