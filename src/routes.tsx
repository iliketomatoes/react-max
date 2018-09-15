import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
// import App from './components/App';
import { About, MembersPage } from './pages';

class Routes extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/about' component={About} />
          <Route path='/members' component={MembersPage} />
          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </HashRouter>
    );
  }
}

export default hot(module)(Routes);
