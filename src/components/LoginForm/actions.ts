import { action } from 'typesafe-actions';

import { Credentials, LoginFormActionTypes } from './types';

export const signIn = (credentials: Credentials) => action(LoginFormActionTypes.LOG_IN, credentials);
export const ping = () => action(LoginFormActionTypes.PING);
