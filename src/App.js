import React, { Component } from 'react';
import { Helmet } from "react-helmet";
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
import HomePageShareImage from './images/ux_challenge_share_image.png';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faQuestionCircle, faShoppingCart, faHome, faSubway, faCalendarCheck, faDumbbell, faBookOpen, faCommentAlt, faDollarSign, faPlane, faNewspaper, faStopwatch, faBolt} from '@fortawesome/free-solid-svg-icons';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-648673-27');
ReactGA.pageview(window.location.pathname + window.location.search);

library.add(faCheckCircle, faQuestionCircle, faShoppingCart, faHome, faSubway, faCalendarCheck, faDumbbell, faBookOpen, faCommentAlt, faDollarSign, faPlane, faNewspaper, faStopwatch, faBolt);

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <title>UX Challenge</title>
            <meta property="title" content="UX Challenge" />
            <meta property="description" content="Practice solving problems with UX design challenges" />

            <meta property="og:title" content="UX Challenge" />
            <meta property="og:description" content="Practice solving problems with UX design challenges" />
            <meta property="og:image" content={HomePageShareImage} />
            <meta property="og:url" content="http://www.uxchallenge.co/" />
            <meta name="twitter:card" content={HomePageShareImage} />

            <meta property="og:site_name" content="UX Challenge" />
            <meta name="twitter:image:alt" content="UX Challenge" />


              <script>{`
                "use strict";

                !function() {
                  var t = window.driftt = window.drift = window.driftt || [];
                  if (!t.init) {
                    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
                    t.factory = function(e) {
                      return function() {
                        var n = Array.prototype.slice.call(arguments);
                        return n.unshift(e), t.push(n), t;
                      };
                    }, t.methods.forEach(function(e) {
                      t[e] = t.factory(e);
                    }), t.load = function(t) {
                      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                      var i = document.getElementsByTagName("script")[0];
                      i.parentNode.insertBefore(o, i);
                    };
                  }
                }();
                drift.SNIPPET_VERSION = '0.3.1';
                drift.load('7krvexgi2iib');
            `}</script>
          </Helmet>
          <Route path="/" component={NavBar} />
          <Route path="/" exact component={Hero} />
          <Route path="/" exact component={Challenges} />
          <Route path="/npo" exact component={NpoHero} />
          <Route path="/npo" exact component={NpoSellSheet} />
          <Route path="/challenge-form" exact component={ChallengeForm} />
          <Route path="/sample-design-challenge" exact component={SampleDesignChallenge} />
          <Route path="/thankyou" exact component={ThankYou} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/" exact component={FooterSignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
