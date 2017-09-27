/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../src/components/App';

test('should render an App', () => {
  const tree = shallow(<App />).debug();
  expect(tree).toMatchSnapshot();
});
