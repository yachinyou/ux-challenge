import React, { Component } from 'react';
import './SampleDesignChallenge.css';
import DesignChallengeHero from './DesignChallengeHero';
import UserProfileImage from '../../images/user_profile_image.png';

class SampleDesignChallenge extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="design-challenge">
                <DesignChallengeHero />
                <div className="container">
                    <div className="row">
                        <div className="challenge-left-col col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <h6 className="challenge-header-sm">challenge overview</h6>
                            <p>We have lots of visitors going to our mobile website and view details for our summer camp for kids, but very few people sign up using our form. They call instead but our interns are too busy to handle all the registrations. We are looking for ideas to make signing up on mobile easier for parents.</p>
                            <h6 className="challenge-header-sm">Main goal</h6>
                            <p>Make signing up for summer camp easy on mobile website.</p>
                            <h6 className="challenge-header-sm">Unique Challenges</h6>
                            <p>We are a completely volunteer run organization, so we’d like to focus our efforts on offering great programs for kids and not administrative tasks. We’d like to see designs ideas that can be easily adopted for our other events, and not too hard to develop because we are relying on volunteer developers as well.</p>
                            <div className="challenge-user-profile paper">
                                <div className="challenge-user-profile-header">
                                    <img src={UserProfileImage} alt="design challenge user profile"/>   
                                    <h6 className="challenge-header-sm">User profile</h6>
                                    <p>Parents of second generation Taiwanese children</p>
                                </div>
                                <h6 className="challenge-header-sm">Age range</h6>
                                <p>35 - 44, 45 - 55</p>
                                <h6 className="challenge-header-sm">Gender</h6>
                                <p>female, male</p>
                                <h6 className="challenge-header-sm">Education</h6>
                                <p>high school, college, graduate school</p>
                                <h6 className="challenge-header-sm">Family Status</h6>
                                <p>married or domestic partners</p>
                                <h6 className="challenge-header-sm">Digital Savviness</h6>
                                <p>7 out of 10</p>
                                <h6 className="challenge-header-sm">Topics of interest</h6>
                                <p>Taiwanese culture, education, Taiwanese food</p>
                                <h6 className="challenge-header-sm">Publications they read</h6>
                                <p>taipei times, new york times, yahoo news taiwan</p>
                                <h6 className="challenge-header-sm">Nick names for themselves</h6>
                                <p>offspring of sweet potatoes</p>
                            </div>
                            <h6 className="challenge-header-sm">Visual guideline</h6>
                            <ul>
                                <li>Please see our existing website or app for visual guideline</li>
                                <li>Please use what goes well with our logo</li>
                                <li><span className="bold">3 adjectives</span>: fun, educational, warm</li>
                            </ul>
                            <h6 className="challenge-header-sm">We'd love to see</h6>
                            <ul>
                                <li>Sketches of ideas</li>
                                <li>Wireframes</li>
                                <li>Low-fidelity mockups</li>
                                <li>High-fidelity mockups</li>
                                <li>Clickable prototype</li>
                            </ul>
                        </div>
                        <div className="challenge-right-col col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <div className="challenge-right-col-sec">
                                <h6 className="challenge-header-sm">Platform</h6>
                                <p>Mobile web</p>
                                <h6 className="challenge-header-sm">Existing website or app</h6>
                                <p><a href="">www.tusce.org</a></p>
                            </div>
                            <div className="challenge-right-col-sec">
                                <h6 className="challenge-header-sm">Mission statement</h6>
                                <p className="organization-name">Taiwan-United States Cultural Exchange</p>
                                <p>We facilitate and promote cultural exchanges for children from Taiwan and the U.S.A. We hope to widen worldviews and deepen cultural experiences for our next generation.</p>
                            </div>
                        </div>
                    </div>
                 </div>    
            </div>
        );
    }

}

export default SampleDesignChallenge;