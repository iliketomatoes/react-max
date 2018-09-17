import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  languageName: 'English',
  enthusiasmLevel: 3
};

const store = createStore(rootReducer, initialState);

// Render the app
render(
  <Main store={store} />,
  document.getElementById('root') as HTMLElement
);

// Register the service worker
registerServiceWorker();
