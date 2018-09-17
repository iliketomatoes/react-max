import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Timeline, News, Login, Portfolio, PredictiveCreditScore } from './pages';
import Navigation from './components/Navigation';

const routeConfig = [
  { label: 'News', url: '/news' },
  { label: 'Timeline', url: '/timeline' },
  { label: 'Portfolio', url: '/portfolio' },
  { label: 'Predictive CS', url: '/predictive-credit-score' },
];

class Routes extends React.Component {
  public render() {
    return (
        <HashRouter>
          <React.Fragment>
            <Navigation routes={routeConfig}/>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path={routeConfig[0].url} component={News} />
              <Route path={routeConfig[1].url} component={Timeline} />
              <Route path={routeConfig[2].url} component={Portfolio} />
              <Route path={routeConfig[3].url} component={PredictiveCreditScore} />
              <Route component={() => <div>Not Found</div>} />
            </Switch>
          </React.Fragment>
        </HashRouter>
    );
  }
}

export default hot(module)(Routes);