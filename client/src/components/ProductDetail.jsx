import React from 'react';
import { Col, Row } from 'react-bootstrap';
import placeholderimg from '../img/products.jpeg';

const ProductDetail = () => (
  <div>
    <Row>
      <Col md={12}>
        <h1>좋은치약 Smile</h1>
      </Col>
    </Row>

    <Row>페퍼민트 오일의 부드러움</Row>

    <img src={placeholderimg} role="presentation" />

    <Row><h2>요리사, 소믈리에, 바리스타 등 미각을 보호해 주는 치약</h2></Row>

    <Row>
      <Col md={3}>천연 페퍼민트의 상쾌함과 시나몬의 독특하면서도 단맛의 청량감</Col>
      <Col md={3}>피톤치드, 카렌듀라, 프로폴리스 등 식물성 오일이 입냄새 제거</Col>
      <Col md={3}>천연 단맛의 자일리톨을 첨가하여 충치예방 효과</Col>
      <Col md={3}>식약처 인증 성분으로 잇몸질환을 예방하는 아미카프론산과 알클록사</Col>
    </Row>

    <Row>
      <Col md={12}>
        <h3>성분</h3><p>From Nature</p>
      </Col>
      <Col md={12}>
        <p>
          식물성계면활성제(코코일글루타민산나트륨), 코큐텐(유비데카레논), 카모마일, 세이지,
          유칼립투스, 알로에, 회향(펜넬)유, 계피(시나몬), 피톤치드, 카렌듀라, 로즈마리, 프로폴리스,
          스피아민트, 페퍼민트, 자몽종자추출물, 녹차, 키토산, 포공영, 몰약, 피톤치드, 자일리톨,
          하이드록시아파타이트
        </p>
      </Col>
    </Row>
  </div>
);

export default ProductDetail;
