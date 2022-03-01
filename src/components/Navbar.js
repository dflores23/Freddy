import React from 'react'
import { Navbar, Container, Nav, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap' 
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function Bar() {
    return (
        <div>
<Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Inicio</Navbar.Brand>
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
          <Nav.Link href="Inicio">Inicio</Nav.Link>
          <Nav.Link href="Equipo">Equipo</Nav.Link>
          <Nav.Link href="Precios">Precios</Nav.Link>
          <Nav.Link href="Contactanos">Contactanos</Nav.Link>
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </div>
    )
}
