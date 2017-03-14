import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import chiyakGeneral from '../img/chiyak_general.jpg';
import chiyakVert from '../img/go_to_purchase.jpg';
import './Products.css';

const Products = () => (
  <div className="product-container">
    <Row>
      <Row>
        <div className="product-title">
          <h1>Choi’s가 개발하고, <br className="mobile-linebreak" />Choice한 좋은치약</h1>
        </div>
        <Col className="product-imagebox" xs={12} sm={8} md={8}>
          <img src={chiyakGeneral} role="presentation" />
        </Col>
        <Col id="linkbox-container" xs={12} sm={4} md={4}>
          <Col xs={12} sm={12} md={12}>
            <Col className="chiyakSection" md={12} sm={12} xs={12}>
              <h2>치약도 <span id="chiyak-smile">음식</span>이다</h2>
            </Col>
          </Col>
          <Col className="product-det1" xs={12} sm={12} md={12}>
            {'입안은 먹는 곳의 시작이며, 인체에서 흡수력이 가장'}
            {'좋은 곳입니다. 하루에 적어도 2~3번의 칫솔질을 '}
            {'평생 해야 한다고 생각하면 치약의 나쁜 성분이 우리 '}
            {'몸속에 축적되어 가는 위험성을 간과해서는 안되기에 '}
            {'음식을 만드는 엄마의 정성스런 마음으로 입안이 '}
            {'건강하고, 전신의 건강까지 생각한 좋은치약을 '}
            {'만들었습니다. '}
          </Col>
          <Col xs={6} xsOffset={3} smOffset={0} sm={12} md={12}>
            <Link to="productDetail" className="go-to-purchase">
              제품보기 <Glyphicon glyph="search" />
            </Link>
          </Col>
        </Col>
      </Row>
    </Row>

    <br />

    <Row>
      <Col id="linkbox-container" xs={12} sm={4} md={4}>
        <Col xs={12} sm={12} md={12}>
          <Col className="chiyakSection" md={12} sm={12} xs={12}>
            <h2>좋은치약 <span id="chiyak-care">care</span></h2>
          </Col>
          <Col className="product-quote" xs={12} sm={12} md={12}>
            {'"입안이 아파서 칫솔질을'}<br className="breakline" />
            {'할 수가 없어요"'}
          </Col>
        </Col>
        <Col className="product-det1" xs={12} sm={12} md={12}>
          {'부드러운 치약을 선호하는 일반인뿐만 아니라 어린이, 임산부, 노인, 환자 등 입안의 특별한 관리를 필요로 하는 분들의 연약한 입안을 보호해 주는 치약'}
        </Col>
        <Col xs={6} xsOffset={3} smOffset={0} sm={12} md={12}>
          <Link to="purchase" className="go-to-purchase">
            사러가기 <Glyphicon glyph="shopping-cart" />
          </Link>
        </Col>
      </Col>
      <Col className="product-imagebox" xs={12} sm={8} md={8}>
        <img src={chiyakVert} role="presentation" />
      </Col>
    </Row>
  </div>
);

export default Products;
