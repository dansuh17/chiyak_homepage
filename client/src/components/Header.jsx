import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import logoimg from '../img/logo.png';
import './Header.css';

const Header = () => (
  <Navbar bsStyle="default" className="header" fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a id="logobox" href="/"><img className="logoimg" src={logoimg} alt="#" /></a>
      </Navbar.Brand>
      <Nav>
        <NavItem className="nav-item">{'New Paradigm of Toothpaste'}</NavItem>
      </Nav>
    </Navbar.Header>
  </Navbar>
);

export default Header;

