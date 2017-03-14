import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SnsLink from './SnsLink';
import './Footer.css';

const Footer = () => (
  <div className="col12 footer">
    <Row>
      <Col md={6} sm={12} xs={12} className="vision">
        <h4>경영이념</h4>
        <br />
        <p>닥터초이스코리아는</p>
        <p>연세대학교 의료원 교수 창업 기업으로</p>
        <p>구강으로부터 시작되는 건강한 삶을 위해서</p>
        <p>안전하고, 우수한 품질의 제품을 만드는</p>
        <p>구강관리용품 전문기업입니다.</p>
      </Col>
      <Col md={6} sm={12} xs={12} className="footer-list-box">
        <h4>{'"From Mouth To Life"'}</h4>
        <br />
        <ul>
          <li>건강</li>
          <p>닥터초이스코리아의 모든 제품은 바르고 안전한 제품으로<br />
            입안의 건강뿐만아니라 전신건강까지 생각합니다.</p>
          <li>나눔</li>
          <p>닥터초이스코리아는 자연과 사람을 존중하며,<br />
            더불어 사는 사회의 공동체적 사명감을 지킵니다.</p>
          <p id="addendum">* 좋은치약 수익금의 일부는 스마일재단과 초록우산 어린이재단에 후원합니다.</p>
          <li>삶의 질</li>
          <p>닥터초이스코리아는 건강과 나눔에 대한 실천을 통해<br />
            삶에 대한 새로운 가치와 감동을 만들어 갑니다.</p>
        </ul>
      </Col>
    </Row>
    <SnsLink />
  </div>
);

export default Footer;
