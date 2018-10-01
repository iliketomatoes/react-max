import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Timeline from './pages/Timeline';
import Login from './pages/Login';
import News from './pages/News';
import Portfolio from './pages/Portfolio';
import PredictiveCreditScore from './pages/PredictiveCreditScore';
import ProtectedRoute from './components/ProtectedRoute';
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

class Routes extends React.Component {
  public render() {

    return (
      <React.Fragment>
        <Navigation routes={navConfig}/>
        <Switch>
          <Route path={URLS.Login} component={Login} />
          <Route exact path='/' render={() => <Redirect to={URLS.News} />} />
          <ProtectedRoute exact path={URLS.News} component={News}/>
          <ProtectedRoute exact path={URLS.Timeline} component={Timeline} />
          <ProtectedRoute exact path={URLS.Portfolio} component={Portfolio} />
          <ProtectedRoute exact path={URLS.PredictiveCreditScore} component={PredictiveCreditScore} />
          <ProtectedRoute component={() => <div>Not Found</div>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
