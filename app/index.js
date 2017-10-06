/* @flow */

import * as Rollbar from 'rollbar';
import { applyMiddleware, compose, createStore } from 'redux';
import { default as App } from './components/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './state/reducers';
import thunk from 'redux-thunk';

new Rollbar({
  accessToken: process.env.ROLLBAR,
  autoInstrument: true,
  captureUncaught: true,
  logLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'warning',
  payload: {
    client: {
      javascript: {
        source_map_enabled: true, // eslint-disable-line
        guess_uncaught_frames: true, // eslint-disable-line
      },
    },
    environment: process.env.NODE_ENV,
  },
});

addEventListener('unhandledrejection', event => Rollbar.error(`Unhandled promise rejection ${event.reason}`));

addEventListener('rejectionhandled', event => Rollbar.warning(`Handled promise rejection ${event.reason}`));

const enhancer = do {
  if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk));
  } else {
    compose(applyMiddleware(thunk));
  }
};

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
