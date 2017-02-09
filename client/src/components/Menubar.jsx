import React from 'react';
import './Menubar.css';
import Scroller from './Scroller';

const Menubar = () => (
  <Scroller />
  /* <Navbar bsStyle="default" className="header2" fixedTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse className="nav-collapse-container">
      <Nav className="nav-center">
        {Contains the link to each pages }
        <NavItem eventKey={1}><Link to="/About">About</Link></NavItem>
        <NavItem eventKey={2}><Link to="/News">새소식</Link></NavItem>
        <NavItem eventKey={3}><Link to="/`Product">Product</Link></NavItem>
        <NavItem eventKey={4}><Link to="/Contact">Contact</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar> */
);

export default Menubar;
