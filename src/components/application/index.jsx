import React from 'react';
import Router from 'routes/router'; // History Router with Stored Params
import Routes from 'routes'; // All Routes with Redirection
import StyleSheet from './layout'; // Stylsheet


function Application(props) {
    return (
      <Router>
        <StyleSheet />
        <Routes />
      </Router>
    );
}

export default Application;
