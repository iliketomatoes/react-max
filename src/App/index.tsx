import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { hot } from 'react-hot-loader';
import { History } from 'history';
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router';
import { RootStoreState } from 'src/rootReducer';
import Router from 'src/Router';
import theme from './theme';

// Separate props from state and props from dispatch to their own interfaces.
interface PropsFromState {
  store: Store<RootStoreState>;
  history: History;
}

class App extends React.Component<PropsFromState> {
  public render() {

    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
            <ConnectedRouter history={history}>
              <Router />
            </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

// Enable hot module replacement
export default hot(module)(App);
