/**
 * Type definitions for the authentication module.
 */

/**
 * Acces token is an alphanumeric string.
 */
export type AccessToken = string;


/**
 * Error type for failed authentication.
 */
export interface AuthError {
  readonly message: string;
  readonly code: number;
}
