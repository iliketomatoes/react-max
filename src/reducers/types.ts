import {VisiblePanes} from '../models';

export interface AuthState {
  isPinging: boolean;
  isUserAuthenticated: boolean;
}

export interface PanesState {
  visiblePanes: VisiblePanes;
}

// Application global state
export interface ApplicationState {
  panes: PanesState;
  auth: AuthState;
}
