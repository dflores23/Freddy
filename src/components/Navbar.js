import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav, } from 'react-bootstrap';


export default function Bar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Freddy's</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="equipo">Equipo</Nav.Link>
            <Nav.Link as={Link} to="servicios">Servicios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}