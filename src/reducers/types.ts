import {VisiblePanes, Pane, User} from '../models';

export interface AuthState {
  isAuthenticated: boolean;
  user: Partial<User>;
}

export interface PanesState {
  visiblePanes: VisiblePanes;
  firstPane: Pane | null;
  secondPane: Pane | null;
  thirdPane: Pane | null;
}

// Application global state
export interface ApplicationState {
  panes: PanesState;
  auth: AuthState;
}
