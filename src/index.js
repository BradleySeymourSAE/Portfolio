import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import './index.scss';
import './App.scss';
import Homepage from 'Homepage';
import Providers from 'providers';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'base.css';

/**
 *  GLOBAL VARIABLES 
 */

 window.$primaryLanguage = 'en';
 window.$primaryLanguageIconId = 'primary-lang-icon';

 window.$secondaryLanguage = 'en';
 window.$secondaryLanguageIconId = 'secondary-lang-icon';


 const Child = () => 
 {
   let title = useParams();

   console.log(title);

   return (
     <div>
       <h1 children={title} />
     </div>
   )
 };


ReactDOM.render(
  <Providers apollo theme>
    <Router>
      <Switch>
       <Route path="/">
         <Homepage />
        </Route>
      </Switch>
      </Router>
  </Providers>,
  document.getElementById('application'),
);




serviceWorker.register();