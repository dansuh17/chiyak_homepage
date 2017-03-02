import React from 'react';
import { Row, Col } from 'react-bootstrap';
import productImage from '../img/products.jpeg';
import shareImage from '../img/share.png';
import './Community.css';

const Community = () => (
  <div className="community-container">
    <Row>
      <Row id="community-share-container">
        <Col xs={12} sm={12} md={12}>
          <h1>좋은치약에는 나눔이 있습니다</h1>
          <br />
          <p>닥터초이스코리아는 좋은치약 수익금의 일부를
            스마일재단과 초록우산 어린이재단에 후원하며,
            나눔을 실천합니다
          </p>
          <div id="share-image-container">
            <img src={shareImage} alt="#" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col id="community-imagebox" xs={12} sm={8} md={8}>
          <img src={productImage} role="presentation" />
        </Col>
        <Col id="linkbox-container" xs={12} sm={4} md={4}>
          <a href="http://www.medium.com">
            <Col className="community-linkbox" xs={6} sm={12} md={12}>
              <h2>News</h2>
              <h4>닥터초이스의 소식을 전해드립니다</h4>
            </Col>
          </a>
          <a href="http://www.brunch.co.kr">
            <Col className="community-linkbox" xs={6} sm={12} md={12}>
              <h2>Health</h2>
              <h4>입안에서 시작되는 건강라이프</h4>
            </Col>
          </a>
        </Col>
      </Row>
    </Row>
  </div>
);

export default Community;
