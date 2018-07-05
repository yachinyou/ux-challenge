import React, { Component } from 'react';
import DesignChallengeMainImage from '../../images/design_challenge_main_image.png';

class DesignChallengeHero extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="hero design-challenge-hero">
                <div className="row">
                    <div className="hero-value col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" >
                        <p className="tag-links">Challenge #001 <a href="">Mobile Web</a> / <a href="">Arts & Culture</a></p>
                        <h3>Make signing up for summer camp easy on our mobile website</h3>
                        <h6 className="organization-name">Taiwan-United States Cultural Exchange</h6>
                    </div>
                    <div className="hero-image col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img src={DesignChallengeMainImage} alt="solve ux challenges in the real world" />
                    </div>
                </div>
            </div>
        );
    }

}

export default DesignChallengeHero;