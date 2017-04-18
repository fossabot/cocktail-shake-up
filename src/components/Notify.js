/* @flow */

import React from 'react';
import { bool, func, object, string, oneOfType } from 'prop-types';
import './Notify.css';

const Notify = (props: Object) => {
  return (
    <div className={props.visible ? 'notification visible' : 'notification'}>
      {props.onCloseHandler ? <button className="close" onClick={props.onCloseHandler} /> : null}
      <h1>{props.title}</h1>
      {props.body}
    </div>
  );
};

Notify.propTypes = {
  onCloseHandler: func,
  body:           oneOfType([object, string]),
  title:          string,
  visible:        bool,
};

export default Notify;
