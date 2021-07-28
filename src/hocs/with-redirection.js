import { withProps } from 'recompose';
import getQueryParams from 'lib/get-query-params';

const withRedirection = withProps((_) => {
  const params = getQueryParams(['redirect'], window.location.search);
  if (params && params.redirect) {
    return params;
  }
  return null;
});

export default withRedirection;
