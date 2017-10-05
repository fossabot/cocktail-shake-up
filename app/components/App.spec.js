/* @flow */

import { App } from '../../app/components/App';
import React from 'react';
import { shallow } from 'enzyme';

test('should render an App', () => {
  const tree = shallow(<App />).debug();
  expect(tree).toMatchSnapshot();
});
