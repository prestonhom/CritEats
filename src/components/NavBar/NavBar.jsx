import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown,Button} from 'react-bootstrap';
import './NavBar.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Navigation extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
        dropdownOpen: false
    };
    }
    toggle() {
    this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
    }));
    }

    onMouseEnter() {
    this.setState({dropdownOpen: true});
    }

    onMouseLeave() {
    this.setState({dropdownOpen: false});
    }
    
    render(){
    return (
    <>
    <Navbar className='NavBar' expand="lg">
        <Navbar.Brand className='logo' href="/restaurants" style={{
            color:'pink',
            fontFamily: 'Monoton , cursive'
        }}>C r i t e a t S</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
            backgroundColor:`pink`,
            cursor:`pointer`,
        }} />
        <Navbar.Collapse style={{
            background:'transparent'
        }}>
                <Nav className="mr-auto">
                    <Nav.Link className='links'href="/"style={{
                        color:'white',
                        
                    }}>Home</Nav.Link>
                    <Nav.Link className='links' href="/About"
                    style={{
                        color:'white'
                    }}>About</Nav.Link>
                    <Nav.Link className='links' href="/restaurants/"
                    style={{
                        color:'white'
                    }}>Restaurants</Nav.Link>
                    
                </Nav>
                <Dropdown 
                        className="d-inline-block" 
                        onMouseOver={this.onMouseEnter} 
                        onMouseLeave={this.onMouseLeave} 
                        isOpen={this.state.dropdownOpen} 
                        toggle={this.toggle}
                        style={{background:'transparent'}}>
                    <DropdownToggle caret
                        style={{
                        fontSize:'90%',
                        border:'none',
                        backgroundColor:'pink',
                        marginRight: '2rem'
                    }}>
                        Search
                    </DropdownToggle>
                        <DropdownMenu 
                        style={{
                            backgroundColor:'teal', 
                            color:'white'
                            
                            }}>
    {props.user} ?
    <div>
      <Link to='/high-scores' className='NavBar-link'>HIGH SCORES</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>


                            <DropdownItem className='dropdown-item'>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className='dropdown-item'>Another Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
        </Navbar.Collapse>
    </Navbar>
    </>
        )   
    }
}
export default Navigation;