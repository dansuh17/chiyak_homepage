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
            <h2>판매처</h2>
          </Col>
          <Col className="linkbox" xs={6} sm={6} md={12}>
            <h2>치약도 음식이다?!</h2>
          </Col>
        </Col>
      </Row>
    </Row>
  </div>
);

export default Products;
