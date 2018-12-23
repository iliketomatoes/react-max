import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { URLS } from 'src/rootRoutes';
import NavBar from 'src/NavBar';
import About from 'src/About';
import AuthLoginScene from 'src/Auth/LoginScene';
import ProtectedRoute from 'src/ProtectedRoute';
import NotFound from 'src/NotFound';
import { Props } from './index';

function Router(props: Props) {

  const { isLoggedIn } = props;

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' render={(props) => <Redirect to={URLS.Homepage} />} />
        <Route path={URLS.Login} component={AuthLoginScene} isAllowed={isLoggedIn} />
        <ProtectedRoute exact path={URLS.Homepage} component={About} isAllowed={isLoggedIn} />
        <ProtectedRoute component={() => <div>Not Found</div>} isAllowed={isLoggedIn} />
        <Route component={NotFound}/>
      </Switch>
    </React.Fragment>
  );
}

export default Router;
