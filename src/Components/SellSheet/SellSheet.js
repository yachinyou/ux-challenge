import React, { Component } from 'react';
import Sell1Image from '../../images/real_projects.png';
import Sell2Image from '../../images/real_experience.png';
import Sell3Image from '../../images/real_case_study.png';
import './SellSheet.css';

class SellSheet extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="sell-sheet">
                <div className="container">
                    <div className="row sell-section">
                        <div className="sell1-image col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img src={Sell1Image} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>Real Problems</h2>
                            <h6>Help nonprofits solve real world problems with your UX design skills.</h6>
                        </div>
                    </div>
                    <div className="row sell-section">
                        <div className="sell2-image col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img src={Sell2Image} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>Real Experience</h2>
                            <h6>Get out there.<br /> Interview users, analyze data and get feedback on your design solutions from the organizations.</h6>
                        </div>
                    </div>
                    <div className="row sell-section">
                        <div className="sell3-image col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img src={Sell3Image} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>Real Case Studies</h2>
                            <h6>Publish case studies to your portfolio, Medium or Dribbble where companies are looking for talent.</h6>
                        </div>
                    </div>
                </div>    
            </div>    
        );
    }
}

export default SellSheet;