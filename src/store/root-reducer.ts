import { combineReducers, Dispatch, Action, AnyAction } from 'redux';

import { paneGridReducer } from '../components/PaneGrid/reducer';
import { PaneGridState } from '../components/PaneGrid/types';

// The top-level state object
export interface ApplicationState {
  panes: PaneGridState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}


export const rootReducer = combineReducers<ApplicationState>({
  panes: paneGridReducer,
});
