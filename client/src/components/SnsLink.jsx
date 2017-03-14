import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './SnsLink.css';

const SnsLink = () => (
  <div>
    <Row className="snslink-row">
      <Col xs={12} sm={12} md={12}>
        <p className="Address">From Mouth To Life</p>
        <br />
        <p className="Address">닥터초이스 고객센터</p>
        <p className="Address">Mon-Fri. 10AM-5PM </p>
        <br />
        <p className="Address">P. 02-363-1502</p>
        <p className="Address">E. kitaechoi@doctorchois.com</p>
        <p className="Address">A. 서울시 서대문구 연세로 50-1 연세의생명연구원 501호</p>
        <br />
        <p className="Address">Copyright 2017 닥터초이스코리아</p>
        <p className="Address">All rights reserved</p>
      </Col>
    </Row>
  </div>
);

export default SnsLink;

