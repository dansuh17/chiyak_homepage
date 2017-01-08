import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import logo from '../logo.svg';
import PeopleContainer from './PeopleContainer';

const Home = () => (
  <Jumbotron>
    <div className="App-header">
      {/* spinning logo */}
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <p>
        <Button
          bsStyle="success"
          bsSize="large"
          href="http://react-bootstrap.github.io/components.html"
          target="_blank"
        >
          View React Bootstrap Docs
        </Button>
      </p>
    </div>
    <p className="App-intro">
      To get Started...
    </p>
    <PeopleContainer />
  </Jumbotron>
);

export default Home;
