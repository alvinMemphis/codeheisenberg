import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivacyMakanika from './Screens/privacy/makanika';
import PrivacyRentPay from './Screens/privacy/privacypolicy';
import About from './components/about/AboutMe';
import Contacts from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Projects from './components/project/Projects';
import Landing from './components/landing/Landing';
import Header from './components/common/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faGlobe, faPhoneAlt, faEnvelope, faPhoneSquare, faFax } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

library.add(faHome, faGlobe, faEnvelope, faPhoneAlt, faPhoneSquare, faFax);


function App() {
  return (
    <div className='container-fluid container-all'>
      
    <Router basename="/codeheisenberg" >
    <Header />
      <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/privacy/makanika" component={PrivacyMakanika}/>
          <Route exact path="/privacy/rentpay" component={PrivacyRentPay}/>
          <Route exact path='/' component={Landing} />
          <Route exact path='/about-me' component={About} />
          <Route exact path='/contact' component={Contacts} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/projects' component={Projects} />
      </Switch>
  </Router>
  </div>
  );
}

export default App;
