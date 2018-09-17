import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { StoreState } from './types';
import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';

interface OwnProps {
  store: Store<StoreState>;
}

class Main extends React.Component<OwnProps> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <React.Fragment>
          <CssBaseline />
          <Routes />
        </React.Fragment>
      </Provider>
    );
  }
}

export default Main;
