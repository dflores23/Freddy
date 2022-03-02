import React from 'react'
import { Navbar, Container, Nav, Offcanvas} from 'react-bootstrap' 
import {Link} from "react-router-dom";


export default function Bar() {
    return (
        <div>
<Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand as={Link} to="/">Freddy's Auto detail</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Freddy's Auto Detail</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/equipo">Equipo</Nav.Link>
          <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </div>
    )
}
