import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import drchoi from '../img/drChoi.png';
import './ChiyakIntro.css';

const ChiyakIntro = () => (
  <div>
    <Row>
      <Col><h2>치약의 개념을 바로잡다!</h2></Col>
      <Col><h3>Choi’s가 개발하고, Choice한 좋은치약</h3></Col>
    </Row>
    <Row>
      <Col md={1} mdOffset={1} className="intro">
        <img className="drchoi" src={drchoi} alt="#" />
      </Col>
      <Col md={7} mdOffset={1} className="intro">
        <Jumbotron>닥터초이스 좋은치약은 ‘좋은 성분을 첨가하기 전에 나쁜 성분을 넣지 않아야 한다’는 원칙으로 만들었습니다.<br />
        치과대학 의사로서 면역력이 떨어진 환자들이 입병으로 고생하고, <br />
          특히 칫솔질시 강한 자극의 치약으로 인해 고통받고, 악화되는 것이 안타까웠습니다. <br />
        이에 약 10년 전, 국내 최초로 합성세제 없는 치약 (위코니치약)을 개발하였고, <br />
        환자뿐만 아니라 누구나 만족할 수 있는 더 좋은치약을 완성했습니다. <br />
        일반 치약의 대부분은 거품을 많이 내기 위해서 미각을 마비시키고, <br />
          입병을 일으키는 합성계면활성제와 강하고 화한 맛을 억지로 느끼게 하는 인공L-멘톨을 사용합니다. <br />
        그러나 좋은치약은 식물성 계면활성제로 부드러운 거품을 내고, <br />
          은은하면서 상쾌한 느낌을 주며, 다양한 약성 성분의 천연 추출물 및 오일로
        입냄새 제거 및 구강건강에 도움을 줍니다.<br />
        더 이상 거품효과에 속지 마세요!<br />
          닥터초이스 좋은치약은 저자극치약으로 일반인은 물론 입안이 아파서 칫솔질을 할 수 없는 환자도 사용할 수 있으며,<br />
        진료 후 편안함으 로  치료의  완성도를  높여줍니다.<br />또한  입안이  연약한  어린이,  임산 부, 노인 등
        특별한 구강관리가 필요한 분도 효과적으로 사용하실 수 있습니다</Jumbotron>
      </Col>
    </Row>
  </div>
);

export default ChiyakIntro;
