import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/Home';
// import Login from './modules/auth/containers/Login';
// import Example from './modules/template/containers/ExamplePage';
// import Navigation from './components/Navigation';

export enum URLS {
  Login = '/login',
  Homepage = '/home',
  Example = '/example',
}

const navConfig = [
  { label: 'Homepage', url: URLS.Homepage },
  { label: 'Example', url: URLS.Example },
];

const ProtectedRoute = ({ isAllowed, ...props }: any) => {
  return isAllowed ? <Route {...props}/> : <Redirect to={URLS.Login} />;
};


class Routes extends React.Component {
  public render() {

    return (
      <React.Fragment>
        <Switch>
          <Route path={URLS.Login} component={Homepage} />
          <Route exact path='/' render={() => <Redirect to={URLS.Login} />} />
          <ProtectedRoute exact path={URLS.Homepage} component={Homepage}/>
          <ProtectedRoute component={() => <div>Not Found</div>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
