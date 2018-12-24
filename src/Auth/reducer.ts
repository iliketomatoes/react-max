/**
 * Reducer for authentication.
 *
 * Responsible for updating our authentication status in the Redux state.
 */

import { reducerWithInitialState } from 'typescript-fsa-reducers';
import produce from 'immer';
import * as actions from './actions';
import { AccessToken, AuthError } from './types';

/** The store state for the auth module. */
export interface StoreState {
  accessToken: Nullable<AccessToken>;
  error: Nullable<AuthError>;
}

const INITIAL_STATE: StoreState = {
  accessToken: null,
  error: null
};

export const reducer = reducerWithInitialState(INITIAL_STATE)
    /* The user has been logged out; remove our stored access token from the state. */
    .case(actions.logoutRequest, produce((draft: StoreState) => {
      draft.accessToken = null;
    }))
    .case(actions.loginRequest.started, produce((draft: StoreState) => {
      draft.error = null;
    }))
    .case(actions.loginRequest.done, produce((draft: StoreState, payload) => {
      draft.accessToken = payload.result;
    }))
    .case(actions.loginRequest.failed, produce((draft: StoreState, payload) => {
      draft.error = payload.error;
    }))
    ;
