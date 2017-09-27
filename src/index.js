import { applyMiddleware, compose, createStore } from 'redux';
import { default as App } from './components/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './state/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

addEventListener('unhandledrejection', event => console.log(`Unhandled promise rejection ${event.reason}`));

addEventListener('rejectionhandled', event => console.log(`Handled promise rejection ${event.reason}`));

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
