import React, { Component } from 'react';
import './NpoSellSheet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NpoIdeaImage from '../../images/npo_have_an_idea_image.png';
import NpoProfileIllustration from '../../images/npo_profile_illustration.png';
import DesignerProfileIllustration from '../../images/designer_profile_illustration.png';
import WhatIsUXImage from '../../images/real_experience.png';
import CaseStudyImage from '../../images/case_study_illustration.png';
import NpoUpsellImage from '../../images/npo_more_engagement_image.png';
import { Button } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';

class NpoSellSheet extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="sell-sheet">
                <div className="container">
                    <div className="row sell-section">
                        <div className="sell-text col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" >
                            <h2>Have an idea for your website or app?</h2>
                            <ul>
                                <li><FontAwesomeIcon icon="check-circle" size="lg" color="#3BD14B" /> <span className="bold">See various case studies done for your design challenge</span> that are sure to inspire your next digital project.</li>
                                <li><FontAwesomeIcon icon="check-circle" size="lg" color="#3BD14B" /> <span className="bold">Your unique problem is a juicy challenge</span> that designers are waiting for.</li>
                                <li><FontAwesomeIcon icon="check-circle" size="lg" color="#3BD14B" /> <span className="bold">Case studies help designers showcase their capabilities</span> and bolster designers’ portfolios.</li>
                            </ul>
                        </div>
                        <div className="sell1-image col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                            <img src={NpoIdeaImage} clat="solve ux challenges in the real world" />
                        </div>
                    </div>
                </div>    
                <div className="how-it-works paper">
                    <div className="container">
                        <h2>How it works</h2>
                        <h6>UX Challenge lists design challenges that help designers<br /> practice their skills and expand their portfolios. </h6>
                        <div className="row sell-section">
                            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12"></div>
                            <div className="how-it-works-profile col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" >
                                <img src={NpoProfileIllustration} alt="nonprofit organizations" />
                                <h5>Nonprofit</h5>
                                <p>Nonprofit organizations create design challenges based on unique problems with their website or app.</p>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2 col-12"></div>
                            <div className="how-it-works-profile col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" >
                                <img src={DesignerProfileIllustration} alt="nonprofit organizations" />
                                <h5>Designer</h5>
                                <p>Designers create case studies that include design research, data analysis and design recommendations.</p>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12 col-12"></div>
                        </div>
                        <Button size="lg" href="/sample-design-challenge">View sample design challenge</Button>
                    </div>
                </div>
                <div className="container">
                    <div className="row sell-section">
                        <div className="sell-text col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" >
                            <h2>What is user experience (UX) design?</h2>
                            <h6>User experience design is a process of designing services or products that <span className="bold">provide optimal experience for the users across different platforms and interactions</span>, from start to finish.</h6>
                        </div>
                        <div className="sell1-image col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                            <img src={WhatIsUXImage} clat="solve ux challenges in the real world" />
                        </div>
                    </div>
                </div>
                <div className="what-is-case-study paper">
                    <div className="container">
                        <h2>What is in a user experience case study?</h2>
                        <div className="row sell-section">
                            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12"></div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" >
                                <img src={CaseStudyImage} alt="nonprofit organizations" />
                            </div>
                            <div className="case-study-text col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" >
                                <p><span className="bold">1. Design Research:</span> designers employ a variety of research methodologies to gain insights from the perspective of the end user.</p>
                                <p><span className="bold">2. Data Analysis:</span> designers analyze data gathered from research and find patterns that are significant to the user and the organization. </p>
                                <p><span className="bold">3. Problem Identification:</span> designers identify and prioritize problem areas to be addressed.</p>
                                <p><span className="bold">4. Design Recommendations:</span> designers give recommendations on ways to solve the identified problems.</p>
                                <p><span className="bold">5. Idea Generation:</span> designers visualize design solutions with sketches, storyboards, wireframes or other techniques.</p>
                                <p><span className="bold">6. Prototype and Test:</span> designers build a prototype of the design solution, test it and get feedback from the users.</p>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12"></div>
                        </div>
                    </div>
                </div>
                <div className="npo-upsell">
                    <div className="container">
                        <h6>User experience design aims to bring</h6>
                        <h2>More visitors, more engagement, more actions</h2>
                        <h6>for your organization’s website or app.</h6>
                        <img src={NpoUpsellImage} alt="nonprofit organizations" />
                        <Button size="lg" href="/challenge-form">Post a challenge</Button>
                    </div>
                </div>
                <div className="npo-faq paper">
                    <div className="container">
                        <CardColumns>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> How much does this cost?</CardTitle>
                                <CardText>It is <span className="bold">free</span> for verified nonprofit organizations with the status of 501(c)(3) or a project with fiscal sponsorship from such organizations to post a design challenge.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> How do I work with the designers?</CardTitle>
                                <CardText>Once the designers start working on your challenge, they may request your feedback at certain points during the design process. When you’re notified of the request, simply review their work and give feedback.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> Do I own the case studies?</CardTitle>
                                <CardText><span className="bold">No</span>. The sole copyright of the case study belongs to the authoring designer.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> How much time do I have to commit?</CardTitle>
                                <CardText>Besides creating a design challenge, which typically takes around 5-10 minutes, you’re encouraged to give feedback to designers when they request it. <br /><br />Designers usually request feedback during the early and middle stages of the design process. Expect around 1 - 2 feedback requests from each designer. <br /><br />There is no further time commitment other than creating a design challenge and giving feedback.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> How soon will I see the case studies?</CardTitle>
                                <CardText>There is no assigned deadline. The turnaround time of the case studies depends on individual designer’s schedule. </CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> What if I don’t like the designs?</CardTitle>
                                <CardText>The design challenge is a chance for designers to practice their skills in a non-contractual environment. Designers can take your feedback but they are not obligated to revise the designs to your satisfaction. If there’s something you don’t like in a design, you can give feedback but it will be up to the designers to revise their case study.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> Will I be matched with a designer?</CardTitle>
                                <CardText><span className="bold">No</span>. Once you post a design challenge, designers who are interested in the challenge can start working on it. There is no matching or interview required in the process. </CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> What can I do with the case studies?</CardTitle>
                                <CardText>You can view the case studies, get insights from the research and recommendations that designers present, and use them as a blueprint or inspiration for your next digital project.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> What if I want to hire a designer?</CardTitle>
                                <CardText>You can contact the designer directly and initiate a contractual project amongst yourselves.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> Are the case studies going to be public?</CardTitle>
                                <CardText><span className="bold">Yes</span>. Designers are going to share these case studies on the internet. They can share the case studies on their portfolio sites, online publications such as Medium.com or online design communities such as Dribbble.com. Designers can also share the case studies with their potential employers or clients.<br /><br />This means that the name of your organization, its branding elements and other information you disclose in the design challenge will appear in case studies and shared.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle><FontAwesomeIcon icon="question-circle" size="lg" color="#3BC3D1" /> How many case studies will there be for my design challenge?</CardTitle>
                                <CardText>The number of case studies done for your design challenge depends on how many designers are interested in your particular problem.</CardText>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </div>
                </div>
                <div className="npo-steps-section">
                    <div className="container">
                        <h2>Post a design challenge today</h2>
                        <div className="row sell-section">
                            <div className="npo-steps col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12" >
                                <div className="npo-circle paper">1</div>
                                <h5>Post a design challenge</h5>
                                <p>Use our guided form to post a design challenge. It will be published once your nonprofit status is verified. </p>
                            </div>
                            <div className="npo-steps col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12" >
                                <div className="npo-circle paper">2</div>
                                <h5>Give feedback</h5>
                                <p>Give feedback to designers when they request it during the design process.</p>
                            </div>
                            <div className="npo-steps col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12" >
                                <div className="npo-circle paper">3</div>
                                <h5>View case studies</h5>
                                <p>View case studies for your design challenge and get inspired.</p>
                            </div>
                        </div>
                            <Button size="lg" href="/challenge-form">Post a challenge</Button>
                    </div>
                </div>  
            </div>    
        );
    }

}

export default NpoSellSheet;