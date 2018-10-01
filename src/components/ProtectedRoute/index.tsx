import * as React from 'react';
import { Route, Redirect, RouteComponentProps, RouteProps } from 'react-router-dom';
import { UserConsumer, UserProviderProps } from '../../UserContext';
import { URLS } from '../../routes';

const ProtectedRoute = ({ component, ...rest }: RouteProps) => {

  if (!component) {
    throw Error('component is undefined');
  }

   // JSX Elements have to be uppercase.
  const Component = component;

  const render = (props: RouteComponentProps<any>): React.ReactNode => {
    return (
      <UserConsumer>{
        ({ isAuthenticated }: UserProviderProps ) => (
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

export default ProtectedRoute;
