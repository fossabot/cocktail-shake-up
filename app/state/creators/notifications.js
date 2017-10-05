/* @flow */

import { HIDE, SHOW } from '../actions/notifications';

export const hideNotification = (): ThunkAction => {
  return (dispatch: Dispatch, getState: GetState): void => {
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
      lastTimeout = setTimeout(() => dispatch({ type: HIDE }), timeout);
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
