import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ChallengeDetails extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            modal: false,
            shortChallengeInstruction: "For a 45 minute challenge, focus on problem solving and organizing your thinking process. Illustrate your ideas with sketches and wireframes.",
            longChallengeInstruction: "For an 8-hour challenge, you can perform user research to validate your hypothesis. You can also show high-fidelity designs and prototypes."
        }

        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return(
            <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" className="challenge-details">
                <div className={this.props.categoryTagClass}>
                    <div className="icon-bg"><FontAwesomeIcon icon={this.props.icon} color="#fff" /></div>
                    <div className="tag-name">{this.props.category}</div>
                        </div>
                <div className="challenge-details-title">
                    <h5>{this.props.title}</h5>
                </div>
                <ModalBody>
                    <p className="challenge-description">{this.props.description}</p>
                    <div className="challenge-variation-header">
                        <FontAwesomeIcon icon="stopwatch" color="#3BC3D1" size="lg" /><span>45-minute challenge</span>
                    </div>
                    <p className="challenge-instruction">{this.state.shortChallengeInstruction}</p>
                    <div className="challenge-variation-header">
                        <FontAwesomeIcon icon="stopwatch" color="#3BC3D1" size="lg" /><span>8-hour challenge</span>
                    </div>
                    <p className="challenge-instruction">{this.state.longChallengeInstruction}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
            </Modal>     
        );
    }

}

export default ChallengeDetails;