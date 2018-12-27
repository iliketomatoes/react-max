/**
 * Type definitions for the authentication module.
 */

/**
 * Error type for failed authentication.
 */
export interface AuthError {
  readonly message: string;
  readonly code: number;
}
