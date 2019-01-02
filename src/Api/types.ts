export interface ApiContextInterface {
  userId?: Nullable<number>;
  accessToken: Nullable<string>;
  logout: () => void;
}

export interface QueryParams {
  started: boolean;
  done: boolean;
  failed: boolean;
}
