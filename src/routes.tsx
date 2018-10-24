import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './modules/auth/containers/Login';
import Example from './modules/template/containers/ExamplePage';
import Navigation from './components/Navigation';

export enum URLS {
  Login = '/login',
  Pets = '/pets',
  Example = '/example',
}

const navConfig = [
  { label: 'Pets', url: URLS.Pets },
  { label: 'Example', url: URLS.Example },
];

const ProtectedRoute = ({ isAllowed, ...props }: any) => {
  return isAllowed ? <Route {...props}/> : <Redirect to={URLS.Login} />;
};


class Routes extends React.Component {
  public render() {

    return (
      <React.Fragment>
        <Navigation routes={navConfig}/>
        <Switch>
          <Route path={URLS.Login} component={Login} />
          <Route exact path='/' render={() => <Redirect to={URLS.Login} />} />
          <ProtectedRoute exact path={URLS.Pets} component={Example}/>
          <ProtectedRoute component={() => <div>Not Found</div>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
