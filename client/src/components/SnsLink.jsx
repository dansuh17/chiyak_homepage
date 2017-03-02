import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from '../img/chiyakLogo.png';
import './SnsLink.css';

const SnsLink = () => (
  <div>
    <Row className="snslink-row">
      <Col xs={12} sm={12} md={3} mdOffset={9}>
        <img src={logo} className="logo" alt="#" /><br /><br />
        <p className="Address">고객센터</p>
        <p className="Address">Mon-Fri. 10AM-5PM </p>
        <p className="Address">P. 02-363-1502</p>
        <p className="Address">E. kitaechoi@doctorchois.com</p>
      </Col>
    </Row>
  </div>
);

export default SnsLink;
