import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <Providers apollo theme>
    <Homepage />
  </Providers>,
  document.getElementById('application'),
);

serviceWorker.register();