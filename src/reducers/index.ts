import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { ApplicationState } from './types';
import paneGridReducer from './panes';

export * from './types';

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

const rootReducer = combineReducers<ApplicationState>({
  panes: paneGridReducer
});

export default rootReducer;
