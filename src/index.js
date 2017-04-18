/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from './state/reducer';
import App from './components/App';

window.addEventListener('unhandledrejection', event => console.log(`Unhandled promise rejection ${event.reason}`));

window.addEventListener('rejectionhandled', event => console.log(`Handled promise rejection ${event.reason}`));

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
