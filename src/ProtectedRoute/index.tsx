import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { URLS } from 'src/routes';

const ProtectedRoute = ({ isAllowed, ...props }: any) => {
  return isAllowed ? <Route {...props}/> : <Redirect to={URLS.Login} />;
};

export default ProtectedRoute;
