import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import {AppContainer} from "react-hot-loader";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Render the app
render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root') as HTMLElement
);

// Register the service worker
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/App', async () => {
    console.info('[HOT] main.js accepts App');
    unmountComponentAtNode(document.getElementById('root') as HTMLElement);
    const ReloadedApp = await require('./components/App').default;
     render(
        <AppContainer>
          <ReloadedApp />
        </AppContainer>
        , document.getElementById('root')
      );
  });
}
