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
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
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
