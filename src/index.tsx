import * as React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import configureStore from './store';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';

const history = createHashHistory();

// TODO use persisted state from browserStorage to initialize the store
const store = configureStore(history);
​
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener

// TODO Throttle subscribe callback call
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
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
