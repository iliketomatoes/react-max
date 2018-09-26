export const enum LoginFormActionTypes {
  LOG_IN = '@@loginform/LOG_IN',
  PING = '@@loginform/PING',
  PONG = '@@loginform/PONG',
}

export interface Credentials {
  name: string;
  password: string;
}

export interface LoginFormState extends Credentials {
  usernameLabel: string;
  passwordLabel: string;
  errorMessage: string;
}

export interface LoginFormProps {
  isPinging: boolean;
}
