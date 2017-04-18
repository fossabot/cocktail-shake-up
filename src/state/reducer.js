/* @flow */

import { Element } from 'react';
import localForage from 'localforage';
import { ADD, HIDE, INIT, REMOVE, SHOW } from './actions';

const initialState = {
  notification: {
    body:    '',
    title:   '',
    visible: false,
  },
  locale: {
    country:  'en-GB',
    currency: 'GBP',
  },
  updateSchedule: 60 * 60 * 1000,
};

export const load = (type: string) => {
  return async (dispatch: Function, getState: Function) => {
    let json = await localForage.getItem(type);

    if (json) {
      const schedule = getState().updateSchedule;
      const elapsed = Date.now() - json.updateTime;

      if (elapsed < schedule) {
        dispatch({
          type: INIT,
          data: {
            ...json.data,
          },
        });

        return;
      }
    }

    const res = await fetch(`/api/${type}.json`);
    json = await res.json();
    localForage.setItem(type, {
      updateTime: Date.now(),
      data:       json,
    });

    dispatch({
      type: INIT,
      data: {
        ...json,
      },
    });
  };
};

export const addCocktailToRound = (id: number) => {
  return (dispatch: Function, getState: Function) => {
    const { name, price, } = getState().prices.find(price => price.id === id);

    dispatch({
      type: ADD,
      data: {
        id,
        name,
        price: parseFloat(price, 10),
      },
    });
  };
};

export const removeCocktailFromRound = (id: number) => {
  return (dispatch: Function, getState: Function) => {
    const { price, } = getState().prices.find(price => price.id === id);

    dispatch({
      type: REMOVE,
      data: {
        id,
        price: parseFloat(price, 10),
      },
    });
  };
};

export const hideNotification = () => {
  return (dispatch: Function, getState: Function) => {
    let lastTimeout = getState().notification.lastTimeout;

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

export function reducer(state: Object = initialState, action: Object = {}) {
  switch (action.type) {
    case INIT: {
      const data = action.data;

      return {
        ...state,
        ...data,
      };
    }

    case ADD: {
      const { id, name, price, } = action.data;

      return {
        ...state,
        round: {
          ...state.round,
          items: {
            ...state.round.items,
            [id]: {
              name,
              quantity: state.round.items[id] ? state.round.items[id].quantity + 1 : 1,
            },
          },
          total: state.round.total + price,
        },
      };
    }

    case REMOVE: {
      const { id, price, } = action.data;

      if (state.round.items[id].quantity <= 1) {
        delete state.round.items[id];
      } else {
        state.round.items[id].quantity = state.round.items[id].quantity - 1;
      }

      if (Object.keys(state.round.items).length !== 0) {
        return {
          ...state,
          round: {
            ...state.round,
            items: state.round.items,
            total: state.round.total - price,
          },
        };
      } else {
        return {
          ...state,
          round: undefined,
        };
      }
    }

    case HIDE: {
      return {
        ...state,
        notification: {
          body:    '',
          title:   '',
          visible: false,
        },
      };
    }

    case SHOW: {
      const { body, title, onCloseHandler, lastTimeout, } = action.data;

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
