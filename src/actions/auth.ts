import { action } from 'typesafe-actions';

import { ActionTypes } from './types';
import { Credentials } from '../models';

export const signIn = (credentials: Credentials) => action(ActionTypes.LOG_IN, credentials);
export const ping = () => action(ActionTypes.PING);
