/* @flow */

import React from 'react';
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

export default Notify;
