/**
 * Action creators for authentication.
 */

import actionCreatorFactory from 'typescript-fsa';
import { AccessToken, AuthError } from './types';

const actionCreator = actionCreatorFactory('Auth');

export interface LoginRequestPayload {
  email: string;
  password: string;
}

/** Async action creator for the login request. The payload contains the username and password requested. */
export const loginRequest = actionCreator
    .async<LoginRequestPayload, AccessToken, AuthError>('LOGIN_REQUEST');

/** Action creator for the logout request. */
export const logoutRequest = actionCreator('LOGOUT_REQUEST');

/** The user has been logged out. */
export const loggedOut = actionCreator('LOGGED_OUT');

/** An error has occurred while the user is logged in, either logging out or refreshing the token. */
export const loggedInError = actionCreator<AuthError>('LOGGED_IN_ERROR');
