import {VisiblePanes} from '../models';

export interface AuthState {
  isAuthenticated: boolean;
}

export interface PanesState {
  visiblePanes: VisiblePanes;
}

// Application global state
export interface ApplicationState {
  panes: PanesState;
  auth: AuthState;
}
