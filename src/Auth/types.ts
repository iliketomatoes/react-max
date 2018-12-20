/**
 * Type definitions for the authentication module.
 */

/** The OAuth2 access token.
 *
 * Properties are marked as readonly because we store the access token in the Redux state.
 */
export interface AccessToken {
  readonly access_token: string;
}

/**
 * Configuration for the OAuth 2 functions.
 */
export interface Config {
  readonly apiBase: string;
  readonly clientId: string;
  readonly clientSecret: string;
}

/**
 * Error type for failed authentication.
 */
export interface AuthError {
  readonly message: string;
  readonly code: number;
}
