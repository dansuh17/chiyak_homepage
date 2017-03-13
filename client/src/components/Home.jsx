import React from 'react';
import { Col, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import questionMark from '../img/question_mark.png';
import fmtlMain from '../img/main_fmtl_low.jpg';
import goodPictogram from '../img/pictograms.png';
import './Home.css';

const popoverHoverFocus = (
  <Popover id="popover-trigger-hover-focus" title="합성계면활성제란(SLS)?">
    <p>치약에서 거품을 내는 성분으로 값싼 석유계 합성 화합물입니다</p>
    <p>클렌저, 샴푸, 주방세제 등 대부분의 생활용품에 포함되어 있으며</p>
    <p>최근에는 아토피 피부염 탈모 등의 문제로 점점 퇴출되고 있습니다</p>
    <p>칫솔질 후 과일을 먹으면 쓰고 맛이 없는 이유는 합성계면 할성제가</p>
    <p>미세포를 혼란시켜 미각이 일시적으로 둔화되기 떄문입니다</p>
    <p>또한 입병을 유발하거나 악화시키고, 연약한 입안을 자극하여</p>
    <p>칫솔질 할 떄 통증으로 구강관리를 소홀하게 합니다</p>
    <p>그리고 입안을 마르고 텁텁하게 하여</p>
    <p>오히려 입냄새가 증가하며 최소 10회 이상 헹궈내야 합니다</p>
  </Popover>
);

const Home = () => (
  <div>
    <img src={fmtlMain} alt="#" />
    <p className="home-subtitle1">
      <bold>치약의 개념을 바로잡다</bold>
    </p>
    <h3>좋은 성분을 넣기 이전에 나쁜 성분을 빼야 합니다</h3>
    <Row className="row-padding">
      <Col className="home-subsection" xs={12} sm={4} md={4}>
        <h3>맛있는 치약</h3>
        <div className="subsection-body">
          이를 닦고 귤을 맛있게 먹을 수 있는 치약
        </div>
      </Col>
      <Col className="home-subsection" xs={12} sm={4} md={4}>
        <h3>안전한 치약</h3>
        <div className="subsection-body">
          어린이와 임산부도 안심하고 쓸 수 있는 치약
        </div>
      </Col>
      <Col className="home-subsection" xs={12} sm={4} md={4}>
        <h3>편안한 치약</h3>
        <div className="subsection-body">
          합성계면활성제가 없는 저자극 치약
        </div>
      </Col>
    </Row>

    {/* 나쁜 성분 빼기 */}
    <Row id="bad-stuff-row">
      <Col id="bad-stuff-col" md={8} sm={12} xs={12}>
        <h4>SLS(합성계면활성제), 인공L-멘톨, 파라벤, 트리클로산, 인공색소,</h4>
        <h4>벤조산, 인공방부제, 광물성오일, CMTI-MIT(가습기살균제 성분)</h4>
        <br />
        <OverlayTrigger trigger={['hover', 'focus', 'click']} placement="bottom" overlay={popoverHoverFocus}>
          <h4 id="SLS-info">합성계면활성제란
            <img className="question-mark" src={questionMark} alt="#" />
          </h4>
        </OverlayTrigger>
      </Col>

      <Col id="minus-title" md={4} sm={6} xs={6}>
        <p>나쁜성분</p>
        <p>빼기</p>
      </Col>

      {/* 좋은 성분 더하기 */}
      <Col id="plus-title" md={4} sm={6} xs={6}>
        <p>좋은성분</p>
        <p>더하기</p>
      </Col>

      <Col md={8} sm={12} xs={12}>
        <img id="good-pictogram" src={goodPictogram} alt="#" />
      </Col>
    </Row>
  </div>
);

export default Home;

