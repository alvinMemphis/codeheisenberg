import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faGlobe, faPhoneAlt, faEnvelope, faPhoneSquare, faFax } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free';
import './assets/css/App.css';

library.add(faHome, faGlobe, faEnvelope, faPhoneAlt, faPhoneSquare, faFax);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
