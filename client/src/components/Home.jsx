import React from 'react';
import { Col, Row, Grid, Jumbotron } from 'react-bootstrap';
import logo from '../img/tooth.jpeg';
import './Home.css';

const Home = () => (
  <div>
    <div className="col12 MainDiv">
      <h2 className="col5 TitleCaption">좋은치약 홈페이지</h2>
    </div>
    <div className="App-header">
      {/* spinning logo */}
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <h2 className="home-subtitle1">좋은 치약</h2>
    <Row className="row-padding">
      <Col className="home-subsection" sm={12} md={3}>
        <h6>글 하나</h6>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaeca tcupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Col>
      <Col className="home-subsection" sm={12} md={3}>
        <h6>글 둘</h6>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaeca tcupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Col>
      <Col className="home-subsection" sm={12} md={3}>
        <h6>글 셋</h6>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaeca tcupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Col>
      <Col className="home-subsection" sm={12} md={3}>
        <h6>글 넷</h6>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaeca tcupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
      </Col>
    </Row>
    <Grid>
      <Row className="row-padding">
        <Jumbotron>
          Team 사진 + 짧은 글
        </Jumbotron>
      </Row>
    </Grid>
    <Grid>
      <Row className="row-padding">
        <Col md={12} sm={12}>
          구매처 + 짧은 글
        </Col>
      </Row>
    </Grid>
    <Grid>
      오프라인 구매처
    </Grid>
  </div>
);

export default Home;
