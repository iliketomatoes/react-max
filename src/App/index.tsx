import * as React from 'react';
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
import Routes from 'src/Routes';
import AppContext from './Context';
import theme from './theme';

setConfig({
  pureSFC: true,
  pureRender: true,
});

interface Props {
  history: History;
}

class App extends React.Component<Props> {

  render() {

    const { history } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ConnectedRouter history={history}>
            <AppContext>
              <Routes />
            </AppContext>
          </ConnectedRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default hot(App);
