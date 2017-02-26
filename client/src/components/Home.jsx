import React from 'react';
import { Col, Row, OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';
import questionMark from '../img/question_mark.png';
import leaf from '../img/leaf.png';
import smile from '../img/smile.png';
import teeth from '../img/teeth.png';
import flower from '../img/flower.png';
import plus from '../img/plus.png';
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

const tooltip1 = (
  <Tooltip id="tooltip1">
    <p>칫솔질 후에도 과일 맛이 그대로 누구나 안심하고 쓸 수 있는 자연거품</p>
  </Tooltip>
);

const tooltip2 = (
  <Tooltip id="tooltip2">
    <p>칫솔질 후에도 과일 맛이 그대로 누구나 안심하고 쓸 수 있는 자연거품</p>
  </Tooltip>
);

const tooltip3 = (
  <Tooltip id="tooltip3">
    <p>칫솔질 후에도 과일 맛이 그대로 누구나 안심하고 쓸 수 있는 자연거품</p>
  </Tooltip>
);

const tooltip4 = (
  <Tooltip id="tooltip4">
    <p>칫솔질 후에도 과일 맛이 그대로 누구나 안심하고 쓸 수 있는 자연거품</p>
  </Tooltip>
);

const Home = () => (
  <div>
    <div className="col12 MainDiv">
      <h1 className="col5 TitleCaption">From Mouth To Life:FMTL</h1>
    </div>
    <h1 className="home-subtitle1">
      치약의 개념을 바로잡다
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

    <Row id="bad-stuff-row">
      <h3>나쁜 성분 빼기</h3>
      <h4>SLS(합성계면활성제, 인공L-멘톨, 파라벤, 트리클로산, 인공색소,</h4>
      <h4>벤조산, 인공방부제, 광물성오일, CMTI-MIT(가습기살균제 성분)</h4>
      <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
        <h4>합성계면활성제란
          <img className="question-mark" src={questionMark} alt="#" />
        </h4>
      </OverlayTrigger>
    </Row>

    <h3>좋은 성분 더하기</h3>
    <Row className="good-stuff">
      <OverlayTrigger placement="bottom" overlay={tooltip1}>
        <Col className="good-stuff-column" xs={12} sm={2} md={2}>
          <div className="good-stuff-image-box">
            <img className="good-stuff-img" src={leaf} alt="#" />
          </div>
          <h5>식물성계면활성제</h5>
        </Col>
      </OverlayTrigger>
      <Col className="good-stuff-column-plus" xs={12} sm={1} md={1}>
        <img className="good-stuff-plus" src={plus} alt="#" />
      </Col>
      <OverlayTrigger placement="bottom" overlay={tooltip2}>
        <Col className="good-stuff-column" xs={12} sm={2} md={2}>
          <div className="good-stuff-image-box">
            <img className="good-stuff-img" src={smile} alt="#" />
          </div>
          <h5>코엔자임 Q10</h5>
        </Col>
      </OverlayTrigger>
      <Col className="good-stuff-column-plus" xs={12} sm={1} md={1}>
        <img className="good-stuff-plus" src={plus} alt="#" />
      </Col>
      <OverlayTrigger placement="bottom" overlay={tooltip3}>
        <Col className="good-stuff-column" xs={12} sm={2} md={2}>
          <div className="good-stuff-image-box">
            <img className="good-stuff-img" src={teeth} alt="#" />
          </div>
          <h5>하이드록시아파타이트</h5>
        </Col>
      </OverlayTrigger>
      <Col className="good-stuff-column-plus" xs={12} sm={1} md={1}>
        <img className="good-stuff-plus" src={plus} alt="#" />
      </Col>
      <OverlayTrigger placement="bottom" overlay={tooltip4}>
        <Col className="good-stuff-column" xs={12} sm={2} md={2}>
          <div className="good-stuff-image-box">
            <img id="flower" className="good-stuff-img" src={flower} alt="#" />
          </div>
          <h5>유기농 에코서트 인증</h5>
        </Col>
      </OverlayTrigger>
    </Row>
  </div>
);

export default Home;
