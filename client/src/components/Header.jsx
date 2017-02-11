import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import logoimg from '../img/chiyakLogo.png';
import './Header.css';

const Header = () => (
  <Navbar bsStyle="default" className="header" fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><img className="logoimg" src={logoimg} alt="#" /></a>
      </Navbar.Brand>
      <Nav>
        <NavItem>{'"치약을 만듭니다"'}</NavItem>
      </Nav>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);

export default Header;
