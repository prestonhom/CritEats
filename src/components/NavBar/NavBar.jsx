import React from "react";
import {Navbar, Nav, NavDropdown,Button} from 'react-bootstrap';
import './NavBar.css'


const Navigation=()=>{
    return (
    <>
    <Navbar className='NavBar' expand="lg">
        <Navbar.Brand className='logo' href="/restaurants" style={{
            color:'pink',
        }}>C r i t e a t S</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
            backgroundColor:`pink`,
            cursor:`pointer`,
        }} />
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className='links'href="/restaurants">Home</Nav.Link>
                    <Nav.Link className='links' href="#link">Link</Nav.Link>
                    <NavDropdown  title="hello" id="basic-nav-dropdown" className='NavDropdown'>
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