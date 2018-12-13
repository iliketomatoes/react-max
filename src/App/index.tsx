import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { hot } from 'react-hot-loader';
import { History } from 'history';
import { Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, Theme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router';
import { RootStoreState } from 'src/rootReducer';
import theme from 'src/theme';
import ProtectedRoute from 'src/ProtectedRoute';
import { URLS } from 'src/rootRoutes';
import Header from 'src/Header';
import About from 'src/About';
import AuthLogin from 'src/Auth/Login';
import AppNotFound from './NotFound';

// Separate props from state and props from dispatch to their own interfaces.
interface PropsFromState {
  theme: Theme;
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
              <React.Fragment>
                <Header />
                <Switch>
                  <Route exact path='/' render={() => <Redirect to={URLS.Homepage} />} />
                  <Route path={URLS.Login} component={AuthLogin} />
                  <ProtectedRoute exact path={URLS.Homepage} component={About}/>
                  <ProtectedRoute component={() => <div>Not Found</div>} />
                  <Route component={AppNotFound}/>
                </Switch>
              </React.Fragment>
            </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default hot(module)(App);
