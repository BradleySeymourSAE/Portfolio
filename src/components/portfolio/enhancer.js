import React from 'react';
import { Redirect, withRouter} from 'react-router-dom';
import { compose, withState, branch, renderComponent } from 'recompose';
import withRedirection from 'hocs/with-redirection';
import routes from 'config/routes';



export default compose(
    withRouter,
    withRedirection
);