import React from 'react';
import { Row, Col } from 'react-bootstrap';
import productImage from '../img/products.jpeg';

const Products = () => (
  <div>
    <Row>
      <Col xs={12} sm={12} md={8}>
        <h1>Products</h1>
        <img src={productImage} role="presentation" />
      </Col>
      <Col xs={12} sm={12} md={4}>
        <Col xs={6} sm={6} md={12}>판매처</Col>
        <Col xs={6} sm={6} md={12}>치약도 음식이다?!</Col>
      </Col>
    </Row>
  </div>
);

export default Products;
