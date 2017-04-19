/* @flow */

import React, { PureComponent } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

export class App extends PureComponent {
  static propTypes = {
    dispatch:     func,
    locale:       object,
    notification: object,
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" render={() => <div>Hello World</div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notification,
    locale:       state.locale,
  };
};

export default connect(mapStateToProps)(App);
