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
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                        <h2>You're in for the free trial</h2>
                            <h6>Thank you for joining the free trial! <span className="bold">We are still working hard to bring UX Challenge to you at this moment</span>,
                            and you'll be the first to know when it's ready.</h6>
                            <h6>In the mean time, if you have any questions, suggestions or just want to say hi,
                            we are over at <span className="bold">uxchallenge (at) gmail (dot) com</span>.</h6>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                </div>
                <div className="thank-you-image-container">
                    <img src={ThankYouImage} alt="we are hard at work to bring ux challenge to you!" />
                </div>
            </div>
        );
    }

}

export default SignUpThankYou;