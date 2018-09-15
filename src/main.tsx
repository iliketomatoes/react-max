import * as React from 'react';
import { Store } from 'redux';
import { Provider, connect } from 'react-redux';
import { StoreState } from './types';
import Routes from './routes';

interface OwnProps {
  store: Store<StoreState>;
}

class Main extends React.Component<OwnProps> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <Routes />
      </Provider>
    );
  }
}

export default connect()(Main);
