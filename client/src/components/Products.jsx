import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import productImage from '../img/products.jpeg';
import shopIcon from '../img/shop.png';
import './Products.css';

const Products = () => (
  <div className="product-container">
    <Row>
      <Row>
        <Col id="product-imagebox" xs={12} sm={12} md={8}>
          <img src={productImage} role="presentation" />
        </Col>
        <Col id="linkbox-container" xs={12} sm={12} md={4}>
          <Col xs={6} sm={6} md={12}>
            <Col className="chiyakSection" md={12} sm={12} xs={12}>
              <h2>좋은치약 smile</h2>
            </Col>
            <Col className="product-quote" xs={12} sm={12} md={12}>
              {'"칫솔질 후에도 과일 맛을'}<br className="breakline" />
              {'그대로 즐길 수 있다?"'}
            </Col>
          </Col>
          <Col className="product-det1" xs={12} sm={12} md={12}>
            {'요리사 소믈리에 바리스타 등'}<br className="breakline" />
            {'미각을 보호해 주는 치약'}
          </Col>
          <Col xs={12} sm={12} md={12}>
            <Link to="purchase" className="go-to-purchase">
              사러가기
              <img className="purchase-icon" src={shopIcon} alt="#" />
            </Link>
          </Col>
        </Col>
      </Row>
    </Row>

    <Row>
      <Col id="product-imagebox" xs={12} sm={12} md={8}>
        <img src={productImage} role="presentation" />
      </Col>
      <Col id="linkbox-container" xs={12} sm={12} md={4}>
        <Col xs={6} sm={6} md={12}>
          <Col className="chiyakSection" md={12} sm={12} xs={12}>
            <h2>좋은치약 care</h2>
          </Col>
          <Col className="product-quote" xs={12} sm={12} md={12}>
            {'"입안이 아파서 칫솔질을'}<br className="breakline" />
            {'할 수가 없어요"'}
          </Col>
        </Col>
        <Col className="product-det1" xs={12} sm={12} md={12}>
          {'어린이, 임산부, 노인 등'}<br className="breakline" />
          {'연약한 입안을 보호해 주는 치약'}
        </Col>
        <Col xs={12} sm={12} md={12}>
          <Link to="go-to-purchase" className="go-to-purchase">
            사러가기
            <img className="purchase-icon" src={shopIcon} alt="#" />
          </Link>
        </Col>
      </Col>
    </Row>
  </div>
);

export default Products;
