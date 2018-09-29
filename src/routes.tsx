import * as React from 'react';
import { Route, Switch, Redirect, RouteComponentProps, RouteProps } from 'react-router-dom';
import { AuthState } from './reducers';
import { UserConsumer } from './UserContext';
import Timeline from './pages/Timeline';
import Login from './pages/Login';
import News from './pages/News';
import Portfolio from './pages/Portfolio';
import PredictiveCreditScore from './pages/PredictiveCreditScore';
import Navigation from './components/Navigation';

export enum URLS {
  Login = '/login',
  News = '/news',
  Timeline = '/timeline',
  Portfolio = '/portfolio',
  PredictiveCreditScore = '/predictive-credit-score'
}

const navConfig = [
  { label: 'News', url: URLS.News },
  { label: 'Timeline', url: URLS.Timeline },
  { label: 'Portfolio', url: URLS.Portfolio },
  { label: 'Predictive CS', url: URLS.PredictiveCreditScore },
];

const PrivateRoute = ({ component, ...rest }: RouteProps) => {
  if (!component) {
    throw Error('component is undefined');
  }

   // JSX Elements have to be uppercase.
  const Component = component;

  const render = (props: RouteComponentProps<any>): React.ReactNode => {
    return (
      <UserConsumer>{
        ({ isAuthenticated }: AuthState ) => (
          <Route
            render={
              props =>
                isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{ pathname: URLS.Login}} />
            }
            {...rest} />
        )}
      </UserConsumer>
      );
  };

  return (<Route {...rest} render={render} />);
};

class Routes extends React.Component {
  public render() {

    return (
      <React.Fragment>
        <Navigation routes={navConfig}/>
        <Switch>
          <Route path={URLS.Login} component={Login} />
          <Route exact path='/' render={() => <Redirect to={URLS.News} />} />
          <PrivateRoute exact path={URLS.News} component={News}/>
          <PrivateRoute exact path={URLS.Timeline} component={Timeline} />
          <PrivateRoute exact path={URLS.Portfolio} component={Portfolio} />
          <PrivateRoute exact path={URLS.PredictiveCreditScore} component={PredictiveCreditScore} />
          <PrivateRoute component={() => <div>Not Found</div>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
