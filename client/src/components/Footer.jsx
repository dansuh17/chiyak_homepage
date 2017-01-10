import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Name from './Name';

const Footer = () => (
  <Jumbotron>
    <p>Footer for something</p>
    <Name myname="Julie" />
    <Name myname="Daniel" />
    <Name myname="Josh" />
    <Name myname="God" />
    <Name myname="Taeho" />
  </Jumbotron>
);

export default Footer;
