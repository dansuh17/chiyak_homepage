import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import './Menubar.css';

const Menubar = () => (
  <Navbar bsStyle="default" className="header2" fixedTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse className="nav-collapse-container">
      <Nav>
        {/* Contains the link to each pages */}
        <NavItem clssName="text" eventKey={1} href="/about">About</NavItem>
        <NavItem eventKey={2} href="/news">새소식</NavItem>
        <NavItem eventKey={3} href="/product">Product</NavItem>
        <NavItem eventKey={4} href="/contact">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menubar;
