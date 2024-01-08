import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImage from "../../public/images/huella-home.png";
import "./styles.css"; 

function NavigationBar() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logoImage}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/dogs">
            Nuestros Perros
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
