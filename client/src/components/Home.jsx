import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import logo from '../logo.svg';
import './Home.css';

const Home = () => (
  <div>
    <Jumbotron>
      <div className="MainDiv">
        <h2>좋은치약 홈페이지</h2>
      </div>
    </Jumbotron>
    <div className="App-header">
      {/* spinning logo */}
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <p>
      치약 사진 + 짧은 글
    </p>
    <p>
      Team 사진 + 짧은 글
    </p>
    <p>
      구매처 + 짧은 글
    </p>
    <p>
      오프라인 구매처
    </p>
  </div>
);

export default Home;
