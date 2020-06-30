import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivacyMakanika from './Screens/privacy/makanika';
import PrivacyRentPay from './Screens/privacy/privacypolicy';
import Home from './Screens/Home/Home';

function App() {
  return (
    <div>
    <Router basename="/codeheisenberg" >
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/privacy/makanika" component={PrivacyMakanika}/>
          <Route exact path="/privacy/rentpay" component={PrivacyRentPay}/>
      </Switch>
  </Router>
  </div>
  );
}

export default App;
