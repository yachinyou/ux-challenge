import React, { Component } from 'react';
import "./Challenges.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardTitle, CardText, CardDeck, CardBody, CardLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ChallengeDetails from './ChallengeDetails';
import ChallengeCard from './ChallengeCard';
import TextTruncate from 'react-text-truncate';

class Challenges extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            designChallenges: [],
            test: "hi"
        }
    }

    componentDidMount() {
        this.setState({
            test: "yo",
            designChallenges: [
                {
                    id: 1,
                    title: "Finding jeans that fit",
                    category: "e-commerce",
                    description: "Shopping for jeans and other form-fitting apparel online could be time-consuming and frustrating. It's hard to compare between different styles, and it's hard to know for sure how they will fit. It's a disappointing experience when you have to return an item that doesn't fit quite right. How can you help customers select the style of jeans that they’re looking for in the right size?",
                    className: "e-commerce"
                },
                {
                    id: 2,
                    title: "When pets are home alone",
                    category: "smart home",
                    description: "No matter how much we love our pets, we still need to leave home to go to work, travel, run errands … leaving our pets home alone and sad. How can you enable pet owners to interact with their pets when they’re not at home?",
                    className: "smart-home"
                },
                {
                    id: 3,
                    title: "Wake up, this is your stop",
                    category: "transportation",
                    description: "Have you ever tried to take a short nap on the train only to wake up and find yourself at the end of the line? How can you help passengers wake up just before the train arrives at their station?",
                    className: "transportation"
                },
                {
                    id: 4,
                    title: "Distraction is everywhere!",
                    category: "productivity",
                    description: "We’re constantly fighting distractions and procrastinations when we’re trying to get work done on the computer. How can you design an environment that helps people focus on their work to be done?",
                    className: "productivity"
                },
                {
                    id: 5,
                    title: "Go out and make a new friend",
                    category: "health & fitness",
                    description: "Friends keep us company through the ups and downs of our lives and help us grow. But as we grow older, our fear and social anxiety can keep us from making new friends. How can you help people who has social anxiety step out and make new friends?",
                    className: "health-fitness"
                },
                {
                    id: 6,
                    title: "Survival language lessons",
                    category: "education",
                    description: "Ever need to travel to a country where you don’t even know how to speak the most basic phrases in that language? How can you help travelers learn the bare minimum language to survive within days before their trip?",
                    className: "education"
                },
                {
                    id: 7,
                    title: "A safe place to go through darkness together",
                    category: "communication",
                    description: "Sometimes strangers who have gone through similar situations can give the best advice when we’re going through rough times in our lives. How can you design an environment where people who are seeking help feel safe to connect and support each other?",
                    className: "communication"
                },
                {
                    id: 8,
                    title: "Stop unwanted subscription fees",
                    category: "fintech",
                    description: "It’s hard to keep track of all the products and services that we have subscribed to every month. All we see is money deducting from our accounts, sometimes from services that we don’t need anymore. How can you design a product which helps manage subscriptions?",
                    className: "fintech"
                },
                {
                    id: 9,
                    title: "Acclimatize me now!",
                    category: "travel",
                    description: "It’s one thing to know what the weather is like in your travel destination, and it’s quite another thing to be totally prepared for temperature or altitude changes so that you stay fit and healthy during the trip. How can you design a product that helps travelers prepare and acclimatize fast for their trip so they don't miss a minute of fun?",
                    className: "travel"
                },
                {
                    id: 10,
                    title: "Reading articles on the go",
                    category: "news & media",
                    description: "When we’re reading on the go, we often get interrupted by events such as the train arriving or social interactions with other people. Many interesting articles get abandoned or added to the ever growing “read later” list. How can you design an experience so readers can read effectively while on the go?",
                    className: "news"
                },
                {
                    id: 11,
                    title: "Acing college entrance exams",
                    category: "education",
                    description: "Preparing for a test as important as college entrance exams can be extremely stressful for both the child and the parents alike. How can you design a service that makes it easy for parents to find help and grow the child’s confidence and knowledge for acing college entrance exams?",
                    className: "education"
                },
                {
                    id: 12,
                    title: "Planning a multi-city vacation",
                    category: "travel",
                    description: "A multi-city vacation sounds exciting to almost anyone. However, the planning of it can be overwhelming. How can you design a tool that helps travelers plan a multi-destination tour? Help travelers create an itinerary that connects multiple points of interest. It should consider their desired length of stay in each location. In addition, it should offer low-cost transportation options.",
                    className: "travel"
                },
                {
                    id: 13,
                    title: "Overdue invoices suck!",
                    category: "fintech",
                    description: "Managing multiple clients and projects is a part of running a business as a freelancer. However, sometimes clients don’t pay on time. How do you help freelance business owners keep track of payments from their clients, and make sure that they receive payments from clients promptly for every project?",
                    className: "fintech"
                },
                {
                    id: 14,
                    title: "Help job seekers create a glowing resume",
                    category: "productivity",
                    description: "It takes hours of editing for job seekers to create a layout for their resumes. When recruiters are on the go, they may have a hard time viewing the resumes on mobile devices. Moreover, when a mistake needs to be corrected on the resume, the whole document needs to be resent all over again. How do you design a tool that helps job seekers effortlessly create a resume that stands out, and is also easily viewable on any devices?",
                    className: "productivity"
                },
                {
                    id: 15,
                    title: "Save sea turtles by reducing single-use packaging from online shopping",
                    category: "e-commerce",
                    description: "Every time someone orders a product online, a sea turtle dies of suffocation from trash...well, almost. It costs money for companies to supply durable packaging for products. It takes time, energy and space for customers to manage the trash. It hurts all other living beings on earth who have to live with the consequence of our desire for convenience. How would you reimagine a system that can help reduce single-use packaging from e-commerce?",
                    className: "e-commerce"
                },
                {
                    id: 16,
                    title: "Give your eyes a break",
                    category: "health & fitness",
                    description: "According to a 2018 report released by Nielsen, American adults spend over 11 hours per day interacting with media on various types of screens and devices. Prolonged computer and device use can cause dry eyes, blurry vision, irritation and eye strain among other symptoms. How do you design a tool that can help screen users take a break from staring at the screen for too long?",
                    className: "health-fitness"
                }
            ]
        });
    }

    render() {

        let designChallenges;

        designChallenges = this.state.designChallenges.map((item, index) => {
            if(item !== 'undefined') {

                let snippet = 
                    <TextTruncate
                        line={2}
                        truncateText=""
                        text={item.description}
                    />

                return <ChallengeCard category={item.category} title={item.title} snippet={snippet} description={item.description} className={item.className}/>
            }
        });


        return(
            <div>
                <div className="challenges-list paper">
                    <div className="container">
                    <p className="challenges-inspiration"><FontAwesomeIcon icon="bolt" color="#F7B700" size="lg" />All challenges have products that are made to solve these <span className="bold">real world problems</span>. <a href="/about">Learn more about UX Challenge</a><FontAwesomeIcon icon="bolt" color="#F7B700" size="lg" /></p>
                        {designChallenges}
                    <p className="challenges-inspiration">More challenges coming soon!</p>    
                    </div>
                </div>

            </div>
        );
    }

}

export default Challenges;