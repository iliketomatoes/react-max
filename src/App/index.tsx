import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router';
import { RootStoreState } from 'src/rootReducer';
import Router from 'src/Router';
import theme from './theme';

setConfig({
  pureSFC: true,
  pureRender: true,
});

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <ConnectedRouter history={history}>
              <Router />
            </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default hot(App);
