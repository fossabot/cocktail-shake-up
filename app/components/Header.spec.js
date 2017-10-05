/* @flow */

import Header from '../../app/components/Header';
import React from 'react';
import { shallow } from 'enzyme';

test('Should render a Header', () => {
  const tree = shallow(<Header />).debug();
  expect(tree).toMatchSnapshot();
});

test('Should render a Header with a previous Link', () => {
  const tree = shallow(<Header previous="previous" />).debug();
  expect(tree).toMatchSnapshot();
});

test('Should render a Header with previous text', () => {
  const tree = shallow(<Header previousTitle="previous" />).debug();
  expect(tree).toMatchSnapshot();
});

test('Should render a Header with a next Link', () => {
  const tree = shallow(<Header next="next" />).debug();
  expect(tree).toMatchSnapshot();
});

test('Should render a Header with next text', () => {
  const tree = shallow(<Header nextTitle="next" />).debug();
  expect(tree).toMatchSnapshot();
});
