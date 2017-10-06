import Notify from './Notify';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Header', module)
  .add('Default', () => <Notify />)
  .add('When Visible', () => <Notify visible={true} />)
  .add('With Close Handler', () => <Notify onCloseHandler={() => {}} visible={true} />)
  .add('With Title', () => <Notify visible={true} title="A Title" />)
  .add('With Title and Body', () => <Notify visible={true} body="A Body" title="A Title" />)
  .add('With Title, Body and Close Handler', () => (
    <Notify onCloseHandler={() => {}} visible={true} body="A Body" title="A Title" />
  ));
