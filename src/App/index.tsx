import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';

/**
 * As of today Material UI needs two providers.
 * The first one is needed by the experimental hooks,
 * the second on is the legacy provider. In the future
 * the legacy provider will be removed.
 */
import { ThemeProvider } from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router';
import { RootStoreState } from 'src/rootReducer';
import Router from 'src/Router';
import AppContext from './Context';
import theme from './theme';

setConfig({
  pureSFC: true,
  pureRender: true,
});

interface Props {
  store: Store<RootStoreState>;
  history: History;
}

class App extends React.Component<Props> {

  componentDidMount() {
    window.addEventListener('beforeunload', this.handleBeforeunload.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeunload.bind(this));
  }

  handleBeforeunload = (event: Event) => {
    // TODO save store in locale storage
  }

  render() {

    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ConnectedRouter history={history}>
              <AppContext>
                <Router />
              </AppContext>
            </ConnectedRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default hot(App);
