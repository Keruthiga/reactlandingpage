import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">KK Cars</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  >
          <Nav.Link className="text-light" href="/">HOME</Nav.Link>
          <Nav.Link className="text-light" href="/cars">CARS</Nav.Link>
          <Nav.Link className="text-light" href="/contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;


