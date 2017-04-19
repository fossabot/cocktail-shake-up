/* @flow */

import { Element } from 'react';
import { fromJS } from 'immutable';
import { HIDE, SHOW } from './actions';

export const hideNotification = () => {
  return (dispatch: Function, getState: Function) => {
    const lastTimeout = getState().notification.lastTimeout;

    clearTimeout(lastTimeout);

    dispatch({
      type: HIDE,
    });
  };
};

export const showNotification = (body: Element<any>, title: string, timeout?: number, onCloseHandler?: Function) => {
  return (dispatch: Function, getState: Function) => {
    let lastTimeout = getState().notification.lastTimeout;

    clearTimeout(lastTimeout);

    if (timeout) {
      lastTimeout = setTimeout(() => dispatch({ type: HIDE, }), timeout);
    }

    dispatch({
      type: SHOW,
      data: {
        body,
        title,
        onCloseHandler,
        lastTimeout,
      },
    });
  };
};

export function reducer(state: Object = {}, action: Object = {}) {
  switch (action.type) {
    case HIDE: {
      return fromJS({
        ...state,
        notification: {
          body:    '',
          title:   '',
          visible: false,
        },
      });
    }

    case SHOW: {
      const { body, title, onCloseHandler, lastTimeout, } = action.data;

      return fromJS({
        ...state,
        notification: {
          body,
          title,
          onCloseHandler,
          lastTimeout,
          visible: true,
        },
      });
    }

    default:
      return state;
  }
}
