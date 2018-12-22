/**
 * Reducer for authentication.
 *
 * Responsible for updating our authentication status in the Redux state.
 */

import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';
import { AccessToken, AuthError } from './types';

/** The store state for the auth module. */
export interface StoreState {
  readonly accessToken?: AccessToken;
  readonly error?: AuthError;
}

const INITIAL_STATE: StoreState = {
  accessToken: undefined,
};

export const reducer = reducerWithInitialState(INITIAL_STATE)
    /* The user has been logged out; remove our stored access token from the state. */
    .case(actions.loggedOut, (state: StoreState) => {
        return { ...state, accessToken: undefined };
    })
    .case(actions.loginRequest.started, (state: StoreState) => {
        return { ...state, error: undefined };
    })
    .case(actions.loginRequest.done, (state: StoreState, payload) => {
      return { ...state, error: undefined, access_token: payload.result.access_token };
    })
    .case(actions.loginRequest.failed, (state: StoreState, payload) => {
        return { ...state, error: payload.error };
    })
    ;
