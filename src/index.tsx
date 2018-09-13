import * as React from 'react';
import { render } from 'react-dom';
import AppRouter from './router';
import registerServiceWorker from './registerServiceWorker';

// Render the app
render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);

// Register the service worker
registerServiceWorker();
