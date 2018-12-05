import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { RootStoreState } from '../../store/rootReducer';
import Routes from '../../routes';
import { History } from 'history';
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../theme';

// Separate props from state and props from dispatch to their own interfaces.
// interface PropsFromState {
//   theme: ThemeColors
// }

interface OwnProps {
  store: Store<RootStoreState>;
  history: History;
}

// Create an intersection type of the component props and our Redux props.
type AllProps = OwnProps;

class Main extends React.Component<AllProps> {
  public render() {

    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
            <ConnectedRouter history={history}>
              <Routes />
            </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default hot(module)(Main);
