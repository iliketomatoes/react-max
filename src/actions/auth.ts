import { action } from 'typesafe-actions';

import { ActionTypes } from './types';
import { Credentials } from '../models';

export const logIn = (credentials: Credentials) => action(ActionTypes.auth.LOG_IN, credentials);
export const logOut = () => action(ActionTypes.auth.LOG_OUT);
