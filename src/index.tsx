import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Render the app
render(
  <App />,
  document.getElementById('root') as HTMLElement
);

// Register the service worker
registerServiceWorker();
