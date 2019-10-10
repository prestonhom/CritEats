import React from "react";
import {Navbar, Nav, NavDropdown,Button} from 'react-bootstrap';
import './NavBar.css'

const Navigation=()=>{
    return (
    <>
    <Navbar className='NavBar' expand="lg">
        <Navbar.Brand className='logo' href="/restaurants">CritEats</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className='links'href="/restaurants">Home</Nav.Link>
                    <Nav.Link className='links' href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                 </Nav>
                    <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
    </Navbar>
    </>
)
}
export default Navigation;