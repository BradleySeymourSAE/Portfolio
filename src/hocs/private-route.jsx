import React from 'react';
import Authentication from 'lib/authentication';
import objectToQueryParams from 'lib/object-to-query-params';
import { Redirect } from 'react-router-dom';
import routes from 'config/routes';
import { Route } from 'react-router-dom';

function PrivateRoute(props) {
  if (Authentication.isAuthenticated()) {
    return <Route {...props} />;
  } else {
    const search = objectToQueryParams({
      redirect: window.location.pathname,
    });
    return <Redirect to={{ pathname: routes.loginPath, search }} />;
  }
}

export default PrivateRoute;
