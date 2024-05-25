import React from 'react'
import {  Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
  return ( <>
    
      <Navbar expand="lg" className="bg-dark " variant='white'>
      <Container>
        <Navbar.Brand href="#home" as={Link} to={"/"} >Learn ACCIDIC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
            <Nav.Link  as={Link} to={"/About"} >About</Nav.Link>
            <NavDropdown title="COURSES" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/Html"} >HTML</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Css"} >
                CSS
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Javascript"} >JAVASCRIPT</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/"} >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </>
  )
}
