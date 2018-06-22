import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Hero.css';
import HeroImage from '../../images/cityscape.png';

class Hero extends Component {

    constructor(props) {
        super(props);
      }

    render() {
        return(
            <div className="hero">
                <div className="row">
                    <div className="hero-value col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" >
                        <h1>Solve UX Challenges <br />in the Real World</h1>
                        <h6>Expand your portfolio.<br /> Help nonprofits solve the world’s most challenging problems with design.</h6>
                        <div className="form-container">
                            <form action="https://bonsterxbonster.us2.list-manage.com/subscribe/post" method="POST">
                                <Input type="hidden" name="u" value="7cdd3e7148bfb13d3deb11a50" />
                                <Input type="hidden" name="id" value="75e70fa2e8" />    
                                <Input className="email-input float-left" type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Your Email"/>
                                <Button type="submit" className="float-left">Try for free</Button>
                            </form>
                        </div>
                    </div>
                    <div className="hero-image col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img src={HeroImage} clat="solve ux challenges in the real world" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;