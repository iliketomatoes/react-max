import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { ApplicationState } from './types';
import { panesReducer } from './panes';
import { authReducer } from './auth';

export * from './types';
export { initialPanesState } from './panes';
export { initialAuthState } from './auth';

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

const rootReducer = combineReducers<ApplicationState>({
  panes: panesReducer,
  auth: authReducer
});

export default rootReducer;
