import React, {Component} from "react";
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
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className='links'href="/">Home</Nav.Link>
                    <Nav.Link className='links' href="#link">Link</Nav.Link>
                    <Dropdown 
                        className="d-inline-block" 
                        onMouseOver={this.onMouseEnter} 
                        onMouseLeave={this.onMouseLeave} 
                        isOpen={this.state.dropdownOpen} 
                        toggle={this.toggle}>
                    <DropdownToggle >
                            Search
                    </DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                </Dropdown>
                 </Nav>
                    <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
    </Navbar>
    </>
        )   
    }
}
export default Navigation;