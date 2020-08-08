import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import { store } from './redux/store/configureStore';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
