import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import './Home.css';

const Home = () => (
  <div>
    <div className="col12 MainDiv">
      <h1 className="col5 TitleCaption">From Mouth To Life:FMTL</h1>
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
    <div className="sls">
      <div className="jum">
        <h3>합성계면활성제(SLS)란?</h3>
        <p>치약에서 거품을 내는 성분으로 값싼 석유계 합성 화합물입니다</p>
        <p>클렌저, 샴푸, 주방세제 등 대부분의 생활용품에 포함되어 있으며</p>
        <p>최근에는 아토피 피부염 탈모 등의 문제로 점점 퇴출되고 있습니다</p>
        <p>칫솔질 후 과일을 먹으면 쓰고 맛이 없는 이유는 합성계면 할성제가</p>
        <p>미세포를 혼란시켜 미각이 일시적으로 둔화되기 떄문입니다</p>
        <p>또한 입병을 유발하거나 악화시키고, 연약한 입안을 자극하여</p>
        <p>칫솔질 할 떄 통증으로 구강관리를 소홀하게 합니다</p>
        <p>그리고 입안을 마르고 텁텁하게 하여</p>
        <p>오히려 입냄새가 증가하며 최소 10회 이상 헹궈내야 합니다</p>
      </div>
    </div>
  </div>
);

export default Home;
