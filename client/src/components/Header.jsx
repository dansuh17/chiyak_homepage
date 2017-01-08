import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar bsStyle="default" fixedTop>
    <Grid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">React App</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Grid>
  </Navbar>
);

export default Header;
