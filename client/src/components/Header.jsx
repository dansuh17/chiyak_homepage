import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import logoimg from '../img/chiyakLogo.png';
import './Header.css';

const Header = () => (
  <Navbar bsStyle="default" fixedTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><img className="logoimg" src={logoimg} alt="#" /></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {/* Contains the link to each pages */}
        <NavItem eventKey={1} href="/about">About</NavItem>
        <NavItem eventKey={2} href="/news">새소식</NavItem>
        <NavItem eventKey={3} href="/product">Product</NavItem>
        <NavItem eventKey={4} href="/contact">Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
