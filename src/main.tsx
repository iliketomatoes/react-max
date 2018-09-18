import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { StoreState } from './types';
import Routes from './routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

interface OwnProps {
  store: Store<StoreState>;
}

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

class Main extends React.Component<OwnProps> {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={this.props.store}>
          <React.Fragment>
            <CssBaseline />
            <Routes />
          </React.Fragment>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default Main;
