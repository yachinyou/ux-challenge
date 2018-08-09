import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './About.css';
import YachinProfile from '../../images/yachin_profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <p>Hello there! I’m Yachin, UX designer and creator of UX Challenge.</p>
                        <p>As designers, we know that a portfolio of work is crucial for getting into the field of UX. But like a lot of designers who are just starting out, you might be <span className="bold">stuck in the need-experience-to-get-experience loop.</span></p>
                        <p>Trust me, I’ve been there, and it sucks.</p>
                        <p>Should you include the blog you designed for your friend? Write up a case study of your own portfolio? Or should you do another "redesign" of Instagram?</p>
                        <p>I’ve done all of the above when I was starting out as a designer, and they didn’t really help me get a job.</p>
                        <p>It wasn’t until I was on the other side of the table looking for designers that I realized why those tricks didn’t work.</p>
                        <p>When I was looking through portfolios and interviewing for designers to join our team in a company, I was looking for designers who:</p>
                        <ul>
                            <li>Have experience <span className="bold">solving real problems that customers face.</span></li>
                            <li><span className="bold">Show their passion in the field</span> and present case studies that are related to the problems we are trying to solve.</li>
                            <li>Show that they can <span className="bold">solve problems while thinking on their feet</span> and that they have a design process that helps them and team members untangle complex issues.</li>
                        </ul>
                        <p>Yes, you can come up with design projects to do yourself, but the problem with a portfolio of random designs and case studies is that:</p>
                        <ul>
                            <li>Employers don’t know if you can solve a problem that customers have in the real world</li>
                            <li>Employers don’t know if you can solve a problem that THEY CARE ABOUT and satisfy their business needs</li>
                            <li>Employers don’t know if you can solve a problem under pressure of time and resources</li>
                        </ul>
                        <p>Perhaps you’ve just finished your design curriculum and are ready to rock and roll in the field of UX. But without much work experience, how will you show the employers that YOU are the right designer who is ready to solve problems for their customers?</p>
                        <p>It is simple, and you can start today:</p>
                        <p><span className="bold">Practice problem solving with design challenges and show the work in your portfolio.</span></p>
                        <p>Use design challenges as a way to practice your problem solving skills, fine tune your design process while expanding your portfolio with the projects that your potential employers are looking for.</p>
                        <p>UX Challenge is here to help you do just that.</p>
                        <p><FontAwesomeIcon icon="check-circle" color="#82C600" size="lg" /><span className="bold">All design challenges have products that are made to solve these real world problems for customers</span>. No more redesigning Spotify for Martians.</p>
                        <p><FontAwesomeIcon icon="check-circle" color="#82C600" size="lg" /><span className="bold">Challenges are focused on the hottest product categories currently</span>, like smart home or transportation, so your portfolio is packed with relevant case studies when you send it off to Google, Uber or (insert your dream company here).</p>
                        <p><FontAwesomeIcon icon="check-circle" color="#82C600" size="lg" /><span className="bold">Prepare for your interviews.</span> Work on the challenges in a <span className="bold">45-min session</span>, simulating a whiteboard challenge or an <span className="bold">8-hour session</span>, simulating a take home design exercise.</p>
                        <p>After you’re finished, <span className="bold">put the case studies in your portfolio</span>. Tell a story of your design process and who you are as a designer, a product thinker and a problem solver.</p>
                        <p><span className="bold">Be the top design talent your dream company wants to hire.</span></p>
                        <p>Start a challenge now!</p>
                        <a className="start-button" href="/">Start a Challenge</a>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                </div>
            </div>
        );
    }
}

export default AboutPage;