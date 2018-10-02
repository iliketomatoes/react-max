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

export interface ApiState {
  isPending: boolean;
  isFulfilled: boolean;
  isRejected: boolean;
  data: any;
  err: any;
}

// Application global state
export interface ApplicationState {
  panes: PanesState;
  auth: AuthState;
  api: ApiState;
}
