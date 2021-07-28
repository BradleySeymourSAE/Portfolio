import React from 'react';
import { compose, pure } from 'recompose';
import { Router } from 'react-router-dom';
import withHistory from 'hocs/with-history';


export function ApplicationRouter(props){
  return <Router history={props.history} children={props.children} />;
}

export default compose(
  //
  pure,
  withHistory,
)(ApplicationRouter);
