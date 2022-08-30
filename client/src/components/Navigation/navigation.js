import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export default function navigation() {
  return (<div>
    <Navbar collapseOnSelect expand="xs" bg="dark" variant="dark" className="text-light">
      <Container>
        <Navbar.Brand>Calentodo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <LinkContainer className="link" to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer className="link" to="/todo">
            <Nav.Link>Todos</Nav.Link>
          </LinkContainer>
          <LinkContainer className="link" to="/statistics">
            <Nav.Link>Statistics</Nav.Link>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>)
}