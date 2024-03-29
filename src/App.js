import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import './vendor/font-awesome/css/font-awesome.min.css';
import './vendor/themify-icons/css/themify-icons.css';

import './styles/admin.scss';
import './styles/style.scss';

import './core/main.js';

import routes from './routes';
import store from './redux/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
