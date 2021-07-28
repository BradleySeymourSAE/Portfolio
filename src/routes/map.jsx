import React from 'react';
import { Redirect } from 'react-router-dom';
import routes from 'config/routes';
import BasicLayout from 'components/application/layouts/basic';
import Homepage from 'Homepage';


export default [
  {
    exact: true,
    path:'/',
    render: () => <Redirect to={{ pathname: routes.portfolio, search: window.location.search }} />
  }
];
