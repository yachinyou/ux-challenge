import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './NpoHero.css';
import NpoHeroImage from '../../images/npo_hero_image.png';

class NpoHero extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="npo-hero">
                <div className="container">
                    <h1>Free design case studies<br />for your nonprofit organization</h1>
                    <h6>Post a design challenge.<br />See case studies created for your website or app idea.</h6>
                    <Button size="lg">Post a challenge</Button>
                    <img src={NpoHeroImage} alt="solve ux challenges in the real world" />
                </div>
            </div>
        );
    }

}

export default NpoHero;