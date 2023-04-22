import React, { useState } from "react";
import logoB from "./../Images/logoB.jpg";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {

  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"><Link to="/">
            <img src={logoB} className ='logo' alt="booking rooms"/>
          </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
          <Nav.Link href="#link"><Link to="/Rooms">Rooms</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;
