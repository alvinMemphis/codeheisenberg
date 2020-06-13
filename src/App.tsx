import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import PrivacyPolicy from './Screens/privacypolicy';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
