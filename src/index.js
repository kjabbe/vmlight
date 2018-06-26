import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import configureStore from './redux/store';
import Routes from './Routes';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
