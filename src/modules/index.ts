import { createStore, combineReducers, applyMiddleware, StoreEnhancer, Store } from 'redux';

// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import { AnyAction } from 'typescript-fsa';
import { History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import rootSaga from './sagas';

/* Import reducers from our modules */
import * as auth from './auth/reducer';
import * as news from './news/reducer';

// import { setConfig as setAuthConfig } from './auth/functions';


/**
 * The root store state. Include sub-states for all of the modules / ducks.
 * All of these should be annotated `readonly`, as should everything down
 * the tree of StoreState interfaces, and their contents.
 */
export interface RootStoreState {
    readonly news: news.StoreState;
    readonly auth: auth.StoreState;
}

export default function configureStore(
  history: History,
): Store<RootStoreState> {

  /**
   * The root reducer, combines reducers for all of the modules / ducks.
   */
  const reducer = combineReducers<RootStoreState>({
    news: news.reducer,
    auth: auth.reducer,
  });

  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});

  /**
  * Create the redux-saga middleware.
  */
  const sagaMiddleware = createSagaMiddleware();

  // configure middlewares
  const middlewares = [routerMiddleware(history), sagaMiddleware];

  /**
  * Enhancers for the store.
  */
  const enhancers = composeEnhancers(
    /* Add the redux-saga middleware */
    applyMiddleware(...middlewares),
  ) as StoreEnhancer<RootStoreState>;

  /**
  * Create the store. We do not include an initial state, as each of the module / duck
  * reducers includes its own initial state.
  */
  const store = createStore(connectRouter(history)(reducer), enhancers);

  /* Run the root saga */
  sagaMiddleware.run(rootSaga);

  /* Create the authentication config */
  // setAuthConfig({
  //     apiBase: '/api',
  //     clientId: 'test',
  //     clientSecret: 'secret',
  // });

  return store;

}
