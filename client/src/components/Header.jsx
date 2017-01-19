import React from 'react';
import { Grid, Nav, NavItem, Navbar } from 'react-bootstrap';
import logoimg from '../img/chiyakLogo.png';
import './Header.css';

const Header = () => (
  <Navbar bsStyle="default" fixedTop>
    <Grid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/"><img className="logoimg" src={logoimg} alt="#" /></a>
        </Navbar.Brand>
        <Nav>
          {/* Contains the link to each pages */}
          <NavItem eventKey={1} href="/about">About</NavItem>
          <NavItem eventKey={2} href="/news">새소식</NavItem>
          <NavItem eventKey={3} href="/product">Product</NavItem>
          <NavItem eventKey={4} href="/contact">Contact</NavItem>
        </Nav>
      </Navbar.Header>
    </Grid>
  </Navbar>
);

export default Header;
