import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { URLS } from 'src/rootRoutes';
import NavBar from 'src/NavBar';
import AuthLoginScene from 'src/Auth/LoginScene';
import ProtectedRoute from 'src/ProtectedRoute';
import NotFound from 'src/NotFound';
import CountryScene from 'src/Country/Scene';
import Footer from 'src/Footer';
import { Props } from './index';
import useStyles from './styles';

function Routes(props: Props) {

  const { isLoggedIn } = props;

  const classes = useStyles({});

  return (
    <React.Fragment>
      <NavBar isLoggedIn={isLoggedIn} />
      <main className={classes.main}>
        <Switch>
          <Route exact path='/' render={(props) => <Redirect to={URLS.Homepage} />} />
          <Route path={URLS.Login} component={AuthLoginScene} isAllowed={isLoggedIn} />
          <ProtectedRoute exact path={URLS.Homepage} component={CountryScene} isAllowed={isLoggedIn} />
          <ProtectedRoute component={() => <div>Not Found</div>} isAllowed={isLoggedIn} />
          <Route component={NotFound}/>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Routes;
