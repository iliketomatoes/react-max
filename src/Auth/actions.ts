/**
 * Action creators for authentication.
 */

import actionCreatorFactory from 'typescript-fsa';
import { AuthError } from './types';

const actionCreator = actionCreatorFactory('Auth');

export interface LoginRequestPayload {
  email: string;
  password: string;
}

/** Async action creator for the login request. The payload contains the username and password requested. */
export const loginRequest = actionCreator
    .async<LoginRequestPayload, string, AuthError>('LOGIN_REQUEST');

/** Action creator for the logout request. */
export const logoutRequest = actionCreator('LOGOUT_REQUEST');

/** An error has occurred while the user is logged in, either logging out or refreshing the token. */
export const loggedInError = actionCreator<AuthError>('LOGGED_IN_ERROR');

/** Part of the state that controls the info snackbar showed in the login page */
export const acknowledgeDemoApp = actionCreator<boolean>('ACK_DEMO_APP');
