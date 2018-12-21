import { Store, createStore, applyMiddleware, StoreEnhancer } from 'redux';

// `react-router-redux` is deprecated, so we use `connected-react-router`.
// This provides a Redux middleware which connects to our `react-router` instance.
import { routerMiddleware } from 'connected-react-router';

import { createEpicMiddleware } from 'redux-observable';
import { Action } from 'typescript-fsa';

// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension';

// If you use react-router, don't forget to pass in your history type.
import { History } from 'history';

// Import the state interface and our combined reducers/epics.
import createRootReducer, { RootStoreState } from './rootReducer';
import rootEpic from './rootEpic';


export default function configureStore(
  history: History
): Store<RootStoreState> {

  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});

  /**
   * Create the redux-epic middleware.
   */
  const epicMiddleware = createEpicMiddleware<Action<any>, Action<any>, RootStoreState, any>();

  // configure middlewares
  const middlewares = [routerMiddleware(history), epicMiddleware];

  /**
   * Enhancers for the store.
   */
  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
  ) as StoreEnhancer<RootStoreState>;

  /**
   * Create the store. We do not include an initial state, as each of the module / duck
   * reducers includes its own initial state.
   */
  const store = createStore(createRootReducer(history), enhancers);

  /* Run the root epic */
  epicMiddleware.run(rootEpic);

  return store;

  }
