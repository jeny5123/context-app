import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
/* import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; */
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
