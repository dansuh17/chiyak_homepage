import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import configureStore from './store/configure-store';
import App from './App';
import News from './components/News';
import Products from './components/Products';
import Contact from './components/Contact';
import About from './components/About';
import Menubar from './components/Menubar';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {/* default route */}
        <IndexRoute component={Menubar} />
        <Route path="/news" component={News} />
        <Route path="/product" component={Products} />
        <Route path="/contact" components={Contact} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
