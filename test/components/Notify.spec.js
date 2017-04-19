import React from 'react';
import { shallow } from 'enzyme';
import Notify from '../../src/components/Notify';

test('Should render a Notification', () => {
  const tree = shallow(<Notify />).debug();
  expect(tree).toMatchSnapshot();
});

test('Should render a Notification with a closeHandler', () => {
  const tree = shallow(<Notify onCloseHandler={() => {}} />).debug();
  expect(tree).toMatchSnapshot();
});

test('should render a Notification with a title', () => {
  const tree = shallow(<Notify visible={true} />).debug();
  expect(tree).toMatchSnapshot();
});
