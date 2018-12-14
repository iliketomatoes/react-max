import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from 'src/ProtectedRoute';
import { URLS } from 'src/rootRoutes';
import Header from 'src/Header';
import About from 'src/About';
import AuthLogin from 'src/Auth/Login';
import NotFound from 'src/NotFound';

class Router extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Redirect to={URLS.Homepage} />} />
          <Route path={URLS.Login} component={AuthLogin} />
          <ProtectedRoute exact path={URLS.Homepage} component={About}/>
          <ProtectedRoute component={() => <div>Not Found</div>} />
          <Route component={NotFound}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default Router;
