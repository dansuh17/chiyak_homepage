import React from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import PeopleContainer from './components/PeopleContainer';

const App = () => (
  <div className="App">
    <Navbar bsStyle="default" fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React App</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Grid>
    </Navbar>
    <Jumbotron>
      <div className="App-header">
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
  </div>
);

export default App;
