import React from 'react';
import { branch, renderComponent } from 'recompose';
import { Route as PublicRoute, Switch } from 'react-router-dom';
import PrivateRoute from 'hocs/private-route';
import routes from './map';

const Route = branch(
  ({ requireAuthentication }) => requireAuthentication,
  renderComponent(PrivateRoute),
)(PublicRoute);

export function ApplicationRoutes() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  );
}

export default ApplicationRoutes;
