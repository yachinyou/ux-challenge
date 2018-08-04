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
                    <div className="hero-value col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
                        <h1>Level Up Your Design Skills</h1>
                        <h6>Practice solving UX problems cusomters face everyday.<br /> Expand your portfolio with work companies want to see.</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;