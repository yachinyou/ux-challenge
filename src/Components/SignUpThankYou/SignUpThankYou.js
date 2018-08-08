import React, { Component } from 'react';
import './SignUpThankYou.css';
import ThankYouImage from '../../images/thank-you-animation.gif';

class SignUpThankYou extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container thank-you">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <h2>Your cheat sheet is on the way!</h2>
                            <h6>It should be in your inbox momentarily. Don't forget to also check your <span className="bold">promotions tab</span> and the <span className="bold">spam folder</span> in case it lands there.</h6>
                            <h6>Still didn't get it? Email me at <span className="bold">uxchallengeco (at) gmail (dot) com</span> and I'll personally send it to you.</h6>
                            <h6>If you have any questions with the challenges or the cheat sheet, also email me! I'll get back to you within 24 hours.</h6>
                            <h6>Happy designing!</h6>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                </div>
                <div className="thank-you-image-container">
                    <img src={ThankYouImage} alt="we are hard at work to bring ux challenge to you!" />
                </div>
            </div>
        );
    }

}

export default SignUpThankYou;