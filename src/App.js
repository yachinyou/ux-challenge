import React, { Component } from 'react';
import './App.css';
import { ReactTitle } from 'react-meta-tags';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Challenges from './Components/Challenges/Challenges';
import SellSheet from './Components/SellSheet/SellSheet';
import FooterSignUp from './Components/FooterSignUp/FooterSignUp';
import ThankYou from './Components/SignUpThankYou/SignUpThankYou';
import AboutPage from './Components/About/About';
import NpoHero from './Components/NpoHero/NpoHero';
import NpoSellSheet from './Components/NpoSellSheet/NpoSellSheet';
import ChallengeForm from './Components/ChallengeForm/ChallengeForm';
import SampleDesignChallenge from './Components/SampleDesignChallenge/SampleDesignChallenge';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faQuestionCircle, faShoppingCart, faHome, faSubway, faCalendarCheck, faDumbbell, faBookOpen, faCommentAlt, faDollarSign, faPlane, faNewspaper, faStopwatch, faChartLine} from '@fortawesome/free-solid-svg-icons';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-648673-27');
ReactGA.pageview(window.location.pathname + window.location.search);

library.add(faCheckCircle, faQuestionCircle, faShoppingCart, faHome, faSubway, faCalendarCheck, faDumbbell, faBookOpen, faCommentAlt, faDollarSign, faPlane, faNewspaper, faStopwatch, faChartLine);

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ReactTitle title="UX Challenge" />
          <Route path="/" component={NavBar} />
          <Route path="/" exact component={Hero} />
          <Route path="/" exact component={Challenges} />
          <Route path="/npo" exact component={NpoHero} />
          <Route path="/npo" exact component={NpoSellSheet} />
          <Route path="/challenge-form" exact component={ChallengeForm} />
          <Route path="/sample-design-challenge" exact component={SampleDesignChallenge} />
          <Route path="/thankyou" exact component={ThankYou} />
          <Route path="/about" exact component={AboutPage} />
          {/* <Route path="/" exact component={FooterSignUp} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
