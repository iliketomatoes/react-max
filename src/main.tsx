import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { ApplicationState } from './store';
import Routes from './routes';
import { History } from 'history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo';
import graphQLClient from './graphQLClient';

// Separate props from state and props from dispatch to their own interfaces.
// interface PropsFromState {
//   theme: ThemeColors
// }

interface PropsFromDispatch {
  [key: string]: any;
}

interface OwnProps {
  store: Store<ApplicationState>;
  history: History;
}

// Create an intersection type of the component props and our Redux props.
type AllProps = PropsFromDispatch & OwnProps;

const theme = createMuiTheme({
  shape: {
    borderRadius: 2,
  },
   typography: {
    'fontFamily': '\'Source Sans Pro\', \'Helvetica\', \'Arial\', sans-serif',
    'fontWeightLight': 300,
    'fontWeightMedium': 500,
    'fontWeightRegular': 400,
   }
});

class Main extends React.Component<AllProps> {
  public render() {

    const { store, history } = this.props;

    return (
      <ApolloProvider client={graphQLClient}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <Routes />
            </MuiThemeProvider>
          </ConnectedRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default hot(module)(Main);
