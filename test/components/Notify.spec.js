import React from 'react';
import Notify from '../../src/components/Notify';
import { shallow } from 'enzyme';

test('Should render a notification', () => {
  const tree = shallow(<Notify />).debug();
  expect(tree).toMatchSnapshot();
});

test('Should render a notification with a closeHandler', () => {
  const tree = shallow(<Notify onCloseHandler={() => {}} />).debug();
  expect(tree).toMatchSnapshot();
});

test('should render a notification with a title', () => {
  const tree = shallow(<Notify visible={true} />).debug();
  expect(tree).toMatchSnapshot();
});
