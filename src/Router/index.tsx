import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from 'src/ProtectedRoute';
import { URLS } from 'src/rootRoutes';
import Header from 'src/Header';
import About from 'src/About';
import AuthLoginScene from 'src/Auth/LoginScene';
import NotFound from 'src/NotFound';

function Router() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <Redirect to={URLS.Homepage} />} />
        <Route path={URLS.Login} component={AuthLoginScene} />
        <ProtectedRoute exact path={URLS.Homepage} component={About}/>
        <ProtectedRoute component={() => <div>Not Found</div>} />
        <Route component={NotFound}/>
      </Switch>
    </React.Fragment>
  );
}

export default Router;
