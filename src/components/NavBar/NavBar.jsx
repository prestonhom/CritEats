import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './NavBar.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Navigation extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
        dropdownOpen: false,
        user:this.props.user
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
    handleLogout=()=>{
    this.setState({user: null})
    }
    handleSignupOrUser=()=>{
        if(this.state.user === null){
            return(
                <DropdownItem className='dropdown-item'style={{backgroundColor:'black'}}> 
                    <Link to='/signup' style={{color:'pink'}}>SignUp
                    </Link>
                </DropdownItem>
                )
        }else{
            return(
                <DropdownItem className='dropdown-item'style={{backgroundColor:'black',color:'pink'}}> 
                    Hello, {this.state.user.name}
                </DropdownItem>
                )
        }
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
        
                <Nav className="mr-auto" style={{
                    borderRadius:'5px'
                }}>
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
                        ACCOUNT
                    </DropdownToggle>
                        <DropdownMenu 
                        style={{
                            backgroundColor:'transparent', 
                            color:'white'
                            }}>
                            {this.handleSignupOrUser()}
                            <DropdownItem className='dropdown-item' style={{backgroundColor:'black'}} to='/login'>
                                <Link to=''onClick={this.handleLogout} style={{color:'pink'}}>
                                Logout 
                                </Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className='dropdown-item' style={{backgroundColor:'black'}} to='/login'>
                                <Link to='/login' style={{color:'pink'}}>Login
                                </Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
        </Navbar.Collapse>
    </Navbar>
    </>
        )   
    }
}
export default Navigation;