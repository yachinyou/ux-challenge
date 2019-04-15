import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ChallengeDetails extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            modal: false,
            shortChallengeInstruction: "To practice for an on-site whiteboard UX design exercise, focus on problem-solving and organizing your thinking process. Illustrate your ideas with sketches and wireframes.",
            longChallengeInstruction: "To create a comprehensive UX design case study for your portfolio, you can perform user research to validate your hypothesis. You can also show high-fidelity designs and prototypes."
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
                        <FontAwesomeIcon icon="stopwatch" color="#3BC3D1" size="lg" /><span>Practice for a Whiteboard UX Design Exercise</span>
                    </div>
                    <p className="challenge-instruction">{this.state.shortChallengeInstruction}</p>
                    <div className="challenge-variation-header">
                        <FontAwesomeIcon icon="stopwatch" color="#3BC3D1" size="lg" /><span>Create a UX design case study for your portfolio</span>
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