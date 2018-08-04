import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardTitle, CardText, CardDeck, CardBody, CardLink } from 'reactstrap';
import ChallengeDetails from './ChallengeDetails';

class ChallengeCard extends Component {

    constructor(props){
        super(props);

        this.state = {
            modal: false
        }

        this.handleChallengeClick = this.handleChallengeClick.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChallengeClick(e) {
        this.challengeDetailsModal.toggle();
    }

    findIcon(category) {

        switch (category){
            case 'e-commerce':
                return "shopping-cart";
                break;

            case 'smart home':
                return "home";
                break; 

            case 'transportation':
                return "subway";
                break;    

            case 'productivity':
                return "calendar-check";
                break;
            
            case 'health & fitness':
                return "dumbbell";
                break; 
                
            case 'education':
                return "book-open";
                break;  
                
            case 'communication':
                return "comment-alt";
                break;  

            case 'fintech':
                return "dollar-sign";
                break;  
                
            case 'travel':
                return "plane";
                break; 
                
            case 'news & media':
                return "newspaper";
                break;   

            default:
                return "shopping-cart";
        }
    }

    render() {

        let categoryTagClass = "cat-tag " + this.props.className;

        return(
                <Card>
                    <CardTitle>
                        <div className={categoryTagClass}>
                            <div className="icon-bg"><FontAwesomeIcon icon={this.findIcon(this.props.category)} color="#fff" /></div>
                            <div className="tag-name">{this.props.category}</div>
                        </div>
                        {this.props.title}
                    </CardTitle>
                    <CardBody>
                        <CardText>{this.props.snippet}</CardText>
                        <ChallengeDetails ref={challengeDetails => this.challengeDetailsModal = challengeDetails} title={this.props.title} description={this.props.description} category={this.props.category} categoryTagClass={categoryTagClass} icon={this.findIcon(this.props.category)}/>
                        <Button onClick={this.handleChallengeClick}>Details</Button>
                    </CardBody>
                </Card>
        );
    }

}

export default ChallengeCard;