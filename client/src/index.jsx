import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import configureStore from './store/configure-store';
import App from './App';
import Home from './components/Home';
import News from './components/News';
import Products from './components/Products';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {/* default route */}
        <IndexRoute component={Home} />
        <Route path="/news" component={News} />
        <Route path="/product" component={Products} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
