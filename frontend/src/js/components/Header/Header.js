import React from 'react';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Navbar
} from 'react-bootstrap';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Demo Auction</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Welcome John" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Sign Out</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);
