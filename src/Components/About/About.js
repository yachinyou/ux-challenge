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
                        <p><span className="bold">Nonprofit organizations</span> create design challenges based on real problems that help designers practice their skills and expand their portfolio. </p>
                        <p><span className="bold">Designers</span> create case studies with research and design recommendations that inform and inspire nonprofit organizations' future digital projects.</p>
                        <img src={YachinProfile} alt="yachin's profile image" />
                        <p>Hi, I'm Yachin, user experience (UX) designer and creator of UX Challenge.</p>
                        <p>Like many designers, I'm constantly looking for opportunities to sharpen my skills, and sometimes it takes the form of a <span className="bold">"fake redesign"</span> of those popular websites or apps — like Instagram.</p>
                        <p>It makes for a fun project, <span className="bold">but everyone knows it's fake</span>, including our potential employers or clients.</p> 
                        <p>Wouldn't it be better if we use our problem solving and design skills to make a real difference? Like, <span className="bold">helping a nonprofit organization with their website or app idea?</span></p>
                        <p><span className="bold">This is why I created UX Challenge</span>, a way for nonprofit organizations to get various design recommendations for their unique problems, and for designers to expand their portfolios with real world case studies.</p>
                        <p>Are you a nonprofit organization? Create a design challenge in under 10 minutes.</p>
                        <Button size="lg" href="/challenge-form">Create a challenge</Button>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                </div>
                {/* <div className="form-container">
                    <form action="https://bonsterxbonster.us2.list-manage.com/subscribe/post" method="POST">
                        <Input type="hidden" name="u" value="7cdd3e7148bfb13d3deb11a50" />
                        <Input type="hidden" name="id" value="75e70fa2e8" />    
                        <Input className="email-input float-left" type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Your Email"/>
                            <Button type="submit" className="float-left">Try for free</Button>
                    </form>
                </div> */}
            </div>
        );
    }
}

export default AboutPage;