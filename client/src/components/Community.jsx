import React from 'react';
import { Row, Col } from 'react-bootstrap';
import productImage from '../img/products.jpeg';
import './Community.css';

const Community = () => (
  <div className="community-container">
    <Row>
      <Col id="community-titlebox" xs={12} sm={12} md={12}>
        <p className="community">Community</p>
      </Col>
      <Row>
        <Col id="community-imagebox" xs={12} sm={12} md={8}>
          <img src={productImage} role="presentation" />
        </Col>
        <Col id="linkbox-container" xs={12} sm={12} md={4}>
          <Col className="community-linkbox" xs={6} sm={6} md={12}>
            <h2>News</h2>
            <p>닥터초이스의 소식을 전해드립니다</p>
          </Col>
          <Col className="community-linkbox" xs={6} sm={6} md={12}>
            <h2>Food</h2>
            <p>{'"잘 먹었습니다" 지금은 좋은 치약으로 양치할 시간'}</p>
          </Col>
          <Col className="community-linkbox" xs={6} sm={6} md={12}>
            <h2>Health</h2>
            <p>입안에서 시작되는 건강라이프</p>
          </Col>
        </Col>
      </Row>
    </Row>
  </div>
);

export default Community;
