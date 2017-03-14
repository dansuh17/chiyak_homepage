import React from 'react';
import { Row, Col } from 'react-bootstrap';
import communityImage from '../img/neanderthal.jpeg';
import shareImage from '../img/mongo-pic_low.jpg';
import './Community.css';

const Community = () => (
  <div className="community-container">
    <Row>
      <Row id="community-share-container">
        <Col xs={12} sm={12} md={12}>
          <h1>좋은치약에는 <br className="mobile-linebreak" />나눔이 있습니다</h1>
          <br />
          <p>
            닥터초이스코리아는 나눔의 정신을 실천하는 기업으로서 좋은치약
            수익금 일부를 스마일재단과 초록우산 어린이재단에 후원합니다.
          </p>
          <div id="share-image-container">
            <img src={shareImage} alt="#" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col id="community-imagebox" xs={12} sm={8} md={8}>
          <img src={communityImage} role="presentation" />
        </Col>
        <Col id="linkbox-container" xs={12} sm={4} md={4}>
          <a href="http://www.medium.com">
            <Col className="community-linkbox" xs={12} sm={12} md={12}>
              <h2>News</h2>
              <h4>닥터초이스의 소식을 전해드립니다</h4>
            </Col>
          </a>
        </Col>
      </Row>
    </Row>
  </div>
);

export default Community;
