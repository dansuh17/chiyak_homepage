import React, { PropTypes } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menubar from './components/Menubar';
import './App.css';

const App = ({ children }) => (
  <div className="App">
    <Header />
    <Menubar />
    {/* header and footer - only children contents change */}
    {children}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
