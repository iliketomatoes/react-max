import * as React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import configureStore from './store';
import { ApplicationState, initialAuthState, initialPanesState } from './reducers';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';

const history = createHashHistory();

// TODO use persisted state from browserStorage to initialize the store
const initialState: ApplicationState  = {
  panes: initialPanesState,
  auth: initialAuthState
};

const store = configureStore(history, initialState);

// Log the initial state
console.log(store.getState());
​
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener

// TODO Throttle subscribe callback call
store.subscribe(() => {
  // TODO save state in the local storage
  console.log(store.getState());
});

// Render the app
render(
  <Main store={store} history={history} />,
  document.getElementById('root') as HTMLElement
);

// Register the service worker
registerServiceWorker();
