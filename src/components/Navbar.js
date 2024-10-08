import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand, Navbar, Container, Nav, } from 'react-bootstrap';


export default function Bar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <Navbar sticky='top' bg="light" expand="sm">
      <Container>
        <NavbarBrand as={Link} to="/">
          {/* <img 
          src="img/icons/viva1.png"
          width="90"
          height="60"
          className="d-inline-block align-top"
          alt=""/> */}
          Viva Mexi Coffee Shop</NavbarBrand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" navbar>
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="drinks">DRINKS</Nav.Link>
            <Nav.Link as={Link} to="food">FOOD</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
