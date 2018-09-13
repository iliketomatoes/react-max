import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import App from './components/App';
import { About, MembersPage } from './pages';

class AppRouter extends React.Component {
  public render() {
    return (
      <HashRouter>
        <div className='container-fluid'>
          <Route component={App} />
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/about' component={About} />
            <Route path='/members' component={MembersPage} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default hot(module)(AppRouter);
