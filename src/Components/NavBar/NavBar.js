import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import Logo from "../../images/ux-challenge-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-brands-svg-icons';
import './NavBar.css'

class NavBar extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return(
            <Navbar light expand="md">
                <NavbarBrand href="/"><img className="navbar-logo" src={Logo} alt="UX Challenge logo" /></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="http://blog.uxchallenge.co/" target="_blank">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.facebook.com/UX-Challenge-204722750349411" target="_blank"><FontAwesomeIcon icon={Icons.faFacebook} size="lg" /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://twitter.com/UXchallengeCo" target="_blank"><FontAwesomeIcon icon={Icons.faTwitter} size="lg" /></NavLink>
                    </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        )
    }
}

export default NavBar;