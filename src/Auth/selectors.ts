/**
 * Store state selectors for the authentication module.
 */

import { RootStoreState } from 'src/rootReducer';

/**
 *
 * @param state Select the current auth access token from the root store state.
 */
export const getAccessToken = (state: RootStoreState) => state.auth.accessToken;
