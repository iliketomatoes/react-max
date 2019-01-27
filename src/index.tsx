import * as React from 'react';
import { render } from 'react-dom';
import { install } from '@material-ui/styles';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from 'src/store';
import App from 'src/App';
import registerServiceWorker from 'src/registerServiceWorker';

// Bootstrap material-ui
install();

const history = createHashHistory();

// Get the store and its initial persisted state
const { store, persistor } = configureStore(history);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// Register the service worker
registerServiceWorker();
