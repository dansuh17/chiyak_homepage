import React, { PropTypes } from 'react';
import { Col, Row, Jumbotron } from 'react-bootstrap';
import './ProductBox.css';

/**
 * 제품 상세 정보를 보여주는 컴포넌트
 * Presents a product box. Displays information - images, details, ingredients -
 * according to that product.
 *
 * @param props: contains information of this product. see the propType assertions below.
 */
const ProductBox = props => (
  <div>
    <Row>
      {/* 제품 이름 */}
      <Col xs={12} sm={12} md={12}>
        <h1>{props.productTitle}</h1>
      </Col>
    </Row>

    <Row><h4>{props.subtitle}</h4></Row>
    <Row className="quoteRow"><h4>{props.quote}</h4></Row>

    {/* 제품 대표 사진 */}
    <Row>
      <Col xs={10} sm={10} md={10} mdOffset={1} xsOffset={1} smOffset={1}>
        <img src={props.imgSrc} role="presentation" />
      </Col>
    </Row>

    <Row><h2>{props.headerTwo}</h2></Row>

    {/* 성분 표시 */}
    <Row>
      <Col className="ingredientBox">
        <p><bold>성분</bold><span className="fromnature"> From Nature</span></p>
        <Jumbotron className="ingred-jumbo">{props.ingredients}</Jumbotron>
      </Col>
    </Row>
  </div>
);

ProductBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  headerTwo: PropTypes.string,
  ingredients: PropTypes.string,
  quote: PropTypes.string,
};

export default ProductBox;
