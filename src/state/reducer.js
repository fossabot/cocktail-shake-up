/* @flow */

import { HIDE, SHOW } from './actions';

export function reducer(state: Object = {}, action: Object = {}) {
  switch (action.type) {
    case HIDE: {
      return {
        ...state,
        notification: {
          body: '',
          title: '',
          visible: false,
        },
      };
    }

    case SHOW: {
      const { body, title, onCloseHandler, lastTimeout } = action.data;

      return {
        ...state,
        notification: {
          body,
          title,
          onCloseHandler,
          lastTimeout,
          visible: true,
        },
      };
    }

    default:
      return state;
  }
}
