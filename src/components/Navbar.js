import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap' 
import {Link} from "react-router-dom";


export default function Bar() {
  
    return (
        <div>
<Navbar collapseOnSelect expand="sm" bg="light" >
  <Container fluid>
    <Navbar.Brand as={Link} to="/">Freddy's Auto Detail</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/equipo">Equipo</Nav.Link>
        <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
      </Nav>
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
