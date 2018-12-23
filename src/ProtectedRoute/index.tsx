import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { URLS } from 'src/rootRoutes';

interface Props extends RouteProps {
  isAllowed: boolean;
}

const ProtectedRoute: React.FunctionComponent<Props> = ({
    isAllowed,
    component: Component,
    ...rest
  }: {
    isAllowed: boolean,
    component: React.ComponentType<RouteProps>
  }) => (
    <Route
      {...rest}
      render={props =>
        isAllowed
          ? <Component {...props} />
          : <Redirect to={URLS.Login} />
      }
    />
  );


export default ProtectedRoute;
