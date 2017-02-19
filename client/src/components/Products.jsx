import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import productImage from '../img/products.jpeg';
import './Products.css';

const Products = () => (
  <div className="product-container">
    <Row>
      <Col id="product-titlebox" xs={12} sm={12} md={12}>
        <p className="products"><Link to="productDetail">Products</Link></p>
      </Col>
      <Row>
        <Col id="product-imagebox" xs={12} sm={12} md={8}>
          <img src={productImage} role="presentation" />
        </Col>
        <Col id="linkbox-container" xs={12} sm={12} md={4}>
          <Col className="linkbox" xs={6} sm={6} md={12}>
            <h2>사러 가기</h2>
          </Col>
        </Col>
      </Row>
    </Row>

    <Row>
      <Col className="chiyakSection" md={12} sm={12} xs={12}>
        <h2>좋은치약 smile</h2>
      </Col>
      <Col xs={12} sm={12} md={12}>
        {'"칫솔질 후에도 과일 맛을 그대로 즐길 수 있다?"'}
      </Col>
      <Col xs={12} sm={12} md={12}>
        요리사 소믈리에 바리스타 등 미각을 보호해 주는 치약
      </Col>
    </Row>

    <Row>
      <Col className="chiyakSection" md={12} sm={12} xs={12}>
        <h2>좋은치약 care</h2>
      </Col>
      <Col xs={12} sm={12} md={12}>
        {'"입안이 아파서 칫솔질을 할 수가 없어요"'}
      </Col>
      <Col xs={12} sm={12} md={12}>
        어린이, 임산부, 노인 등 연약한 입안을 보호해 주는 치약
      </Col>
    </Row>
  </div>
);

export default Products;
