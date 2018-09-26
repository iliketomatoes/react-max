import { combineReducers, Dispatch, Action, AnyAction } from 'redux';

import { paneGridReducer, PaneGridState } from '../components/PaneGrid/';
import { loginFormReducer, LoginFormProps } from '../components/LoginForm';

// The top-level state object
export interface ApplicationState {
  panes: PaneGridState;
  auth: LoginFormProps;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}


export const rootReducer = combineReducers<ApplicationState>({
  panes: paneGridReducer,
  auth: loginFormReducer
});
