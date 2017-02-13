import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import './Home.css';

const Home = () => (
  <div>
    <div className="col12 MainDiv">
      <h1 className="col5 TitleCaption">좋은치약 홈페이지</h1>
    </div>
    <h1 className="home-subtitle1">
      {/* Go to another page */}
      <Link to="/somewhere">치약의 개념을 바로잡다</Link>
    </h1>
    <Row className="row-padding">
      <Col className="home-subsection" xs={12} sm={12} md={4}>
        <h3>신선한 치약</h3>
        <div className="subsection-body">
          이를 닦고 귤을 맛있게 먹을 수 있는 치약
        </div>
      </Col>
      <Col className="home-subsection" xs={12} sm={12} md={4}>
        <h3>안전한 치약</h3>
        <div className="subsection-body">
          어린이와 임산부도 안심하고 쓸 수 있는 치약
        </div>
      </Col>
      <Col className="home-subsection" xs={12} sm={12} md={4}>
        <h3>편안한 치약</h3>
        <div className="subsection-body">
          합성계면활성제가 없는 저자극 치약
        </div>
      </Col>
    </Row>
  </div>
);

export default Home;
