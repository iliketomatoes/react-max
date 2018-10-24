import { createStore, combineReducers, applyMiddleware, StoreEnhancer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootEpic from './epics';
import * as auth from './auth/reducer';
import * as petstore from './petstore/reducer';
import { setConfig as setAuthConfig } from './auth/functions';

/* Import reducers from our modules */
import * as template from '../modules/template/reducer';
// import * as another from '../modules/another/reducers';

/**
 * The root store state. Include sub-states for all of the modules / ducks.
 * All of these should be annotated `readonly`, as should everything down
 * the tree of StoreState interfaces, and their contents.
 */
export interface RootStoreState {
  readonly template: template.StoreState;
  readonly auth: auth.StoreState;
  readonly petstore: petstore.StoreState;
}

export default function configureStore(
  history: History,
): Store<RootStoreState> {

  /**
   * The root reducer, combines reducers for all of the modules / ducks.
   */
  const reducer = combineReducers<RootStoreState>({
    template: template.reducer,
    auth: auth.reducer,
    petstore: petstore.reducer,
  });

  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});

  /**
   * Create the redux-epic middleware.
   */
  const epicMiddleware = createEpicMiddleware();
  // configure middlewares
  const middlewares = [routerMiddleware(history), epicMiddleware];

  /**
   * Enhancers for the store.
   */
  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares),
  ) as StoreEnhancer<RootStoreState>;

  /**
   * Create the store. We do not include an initial state, as each of the module / duck
   * reducers includes its own initial state.
   */
  const store = createStore(connectRouter(history)(reducer), enhancers);

  /* Run the root epic */
  epicMiddleware.run(rootEpic);

  /* Create the authentication config */
  setAuthConfig({
    apiBase: '/api',
    clientId: 'test',
    clientSecret: 'secret',
  });

  return store;

}
