import { action } from 'typesafe-actions';

import { ActionTypes } from './types';
import { User } from '../models';

export const logIn = (user: User) => action(ActionTypes.auth.LOG_IN, user);
export const logOut = () => action(ActionTypes.auth.LOG_OUT);
