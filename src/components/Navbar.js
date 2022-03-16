import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarBrand, Navbar, Container, Nav, } from 'react-bootstrap';


export default function Bar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <Navbar sticky='top' bg="light" expand="sm">
      <Container>
        <NavbarBrand as={Link} to="/"><img 
          src="https://scontent-den4-1.xx.fbcdn.net/v/t1.6435-9/170693964_886516878571504_3767216802158685553_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=DTzVJa5ujuwAX9_ah6H&_nc_ht=scontent-den4-1.xx&oh=00_AT9EFjoxbNXOIWPE843cwm-yTspFU5xCE6ZUGEkvhR9ucg&oe=6243AE1D"
          width="90"
          height="60"
          className="d-inline-block align-top"
          alt="freddy logo"
        />Freddy's Auto Detail</NavbarBrand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" navbar>
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="equipo">Equipo</Nav.Link>
            <Nav.Link as={Link} to="servicios">Servicios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
