import React from 'react';
import { Link, IndexLink } from 'react-router';

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
        <IndexLink to="/">Demo Auction</IndexLink>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={1} href="/auction" to="/auction">Auction</NavItem>
      <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">About</NavItem>
      <NavDropdown eventKey={3} title="Welcome John" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Sign Out</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);
