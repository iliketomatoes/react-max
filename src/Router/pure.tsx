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

  const { loggedIn } = props;

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' render={(props) => <Redirect to={URLS.Homepage} />} />
        <Route path={URLS.Login} component={AuthLoginScene} isAllowed={loggedIn} />
        <ProtectedRoute exact path={URLS.Homepage} component={About} isAllowed={loggedIn} />
        <ProtectedRoute component={() => <div>Not Found</div>} isAllowed={loggedIn} />
        <Route component={NotFound}/>
      </Switch>
    </React.Fragment>
  );
}

export default Router;
