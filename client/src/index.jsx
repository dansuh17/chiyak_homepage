import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import News from './components/News';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Main from './components/Main';
import ProductDetail from './components/ProductDetail';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* default route */}
      <IndexRoute component={Main} />
      <Route path="/news" component={News} />
      <Route path="/product" component={Products} />
      <Route path="/contact" components={Contact} />
      <Route path="/about" component={About} />
      <Route path="/productDetail" component={ProductDetail} />
    </Route>
  </Router>,
  document.getElementById('root'),
);
