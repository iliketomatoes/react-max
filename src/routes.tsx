import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Timeline from './pages/Timeline';
import News from './pages/News';
import Portfolio from './pages/Portfolio';
import PredictiveCreditScore from './pages/PredictiveCreditScore';
import Navigation from './components/Navigation';

enum URLS {
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
          {/* <Route exact path='/' component={Login} /> */}
          <Route exact path='/' render={() => (
            <Redirect to={URLS.News} />
          )}/>
          <Route path={URLS.News} component={News} />
          <Route path={URLS.Timeline} component={Timeline} />
          <Route path={URLS.Portfolio} component={Portfolio} />
          <Route path={URLS.PredictiveCreditScore} component={PredictiveCreditScore} />
          <Route component={() => <div>Not Found</div>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routes;
