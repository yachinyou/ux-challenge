import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './About.css';
import YachinProfile from '../../images/yachin_profile.png';

class AboutPage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container about">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <h2>About UX Challenge</h2>
                        <img src={YachinProfile} alt="yachin's profile image" />
                        <p>Hi, I'm Yachin, user experience (UX) designer and creator of UX Challenge.</p>
                        <p>Like many designers, I'm constantly looking for opportunities to sharpen my skills, and sometimes it takes the form of a <span className="bold">"fake redesign"</span> of those popular websites or apps — like Instagram.</p>
                        <p>It makes for a fun project, <span className="bold">but everyone knows it's fake</span>, including our potential employers or clients.</p> 
                        <p>Wouldn't it be better if we use our problem solving and design skills to make a real difference? Like, <span className="bold">helping a nonprofit organization with their website or app idea?</span></p>
                        <p><span className="bold">This is why I created UX Challenge</span>, a way for nonprofit organizations to get various design recommendations for their unique problems, and for designers to expand their portfolios with real world case studies.</p>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                </div>
            </div>
        );
    }
}

export default AboutPage;