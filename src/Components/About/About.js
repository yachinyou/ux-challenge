import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './About.css';

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
                        <p>You know a portfolio of work is crucial for getting into the field of UX, but you're stuck in the need-experience-to-get-experience loop.</p>
                        <p>Should you showcase the blog you designed for your friend? Write up a case study of your own portfolio? Or should you do another "redesign" of Instagram?</p>
                        <p>You know these are not real work experience, and the companies who are hiring know it too.</p>  
                        <p>The truth is, you do have the skills to start working in the field of UX, you just don't know where to start.</p>
                        <p>What if you can speak to a comprehensive portfolio packed with research, data and user feedback? What if you can feel confident at a portfolio review presenting your design solutions for different products and services?</p>
                        <p className="bold">You could start working with an organization, gain real experience and expand your portfolio -- now.</p>
                        <p>UX Challenge brings you nonprofit organizations who are in need of your UX expertise. Work on real world UX challenges that these organizations are facing, gain experience from working with teams and stakeholders, and add these real case studies to your portfolio.</p>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                </div>
                <div className="form-container">
                        <form action="https://bonsterxbonster.us2.list-manage.com/subscribe/post" method="POST">
                            <Input type="hidden" name="u" value="7cdd3e7148bfb13d3deb11a50" />
                            <Input type="hidden" name="id" value="75e70fa2e8" />    
                            <Input className="email-input float-left" type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Your Email"/>
                            <Button type="submit" className="float-left">Try for free</Button>
                        </form>
                    </div>
            </div>
        );
    }
}

export default AboutPage;