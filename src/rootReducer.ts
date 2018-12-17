import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// If you use react-router, don't forget to pass in your history type.
import { History } from 'history';

import * as auth from 'src/Auth/reducer';


/**
 * The root store state. Include sub-states for all of the modules / ducks.
 * All of these should be annotated `readonly`, as should everything down
 * the tree of StoreState interfaces, and their contents.
 */
export interface RootStoreState {
  readonly auth: auth.StoreState;
}


/**
 * The root reducer, combines reducers for all of the modules / ducks.
 */
const rootReducer = {
  auth: auth.reducer,
};

export default (history: History) => combineReducers({
  router: connectRouter(history),
  ...rootReducer
});
