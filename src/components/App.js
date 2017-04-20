/* @flow */

import React, { PureComponent } from 'react';
import { func, object } from 'prop-types';
import { Helmet } from 'react-helmet';
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
            <Route
              path="/goodbye"
              render={() => (
                <div id="goodbye">
                  <p>Goodbye World</p>
                  <Helmet>
                    <title>Goodbye Cocktail Shake Up</title>
                  </Helmet>
                </div>
              )}
            />
            {/* Most generic path always goes last */}
            <Route
              path="/"
              render={() => (
                <div id="greet">
                  <p>Hello World</p>
                  <Helmet>
                    <title>Hello Cocktail Shake Up</title>
                  </Helmet>
                </div>
              )}
            />
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
