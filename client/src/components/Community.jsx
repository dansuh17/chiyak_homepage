import React from 'react';
import { Row, Col } from 'react-bootstrap';
import productImage from '../img/products.jpeg';
import './Community.css';

const Community = () => (
  <div className="community-container">
    <Row>
      <Row>
        <Col id="community-imagebox" xs={12} sm={8} md={8}>
          <img src={productImage} role="presentation" />
        </Col>
        <Col id="linkbox-container" xs={12} sm={4} md={4}>
          <a href="http://www.medium.com">
            <Col className="community-linkbox" xs={6} sm={12} md={12}>
              <h2>News</h2>
              <p>닥터초이스의 소식을 전해드립니다</p>
            </Col>
          </a>
          <a href="http://www.brunch.co.kr">
            <Col className="community-linkbox" xs={6} sm={12} md={12}>
              <h2>Health</h2>
              <p>입안에서 시작되는 건강라이프</p>
            </Col>
          </a>
        </Col>
      </Row>
    </Row>
  </div>
);

export default Community;
