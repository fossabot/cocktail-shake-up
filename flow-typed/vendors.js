/* @flow */

// React intl
export type MessageDescriptorMap = { [key: string]: MessageDescriptor };

// Redux
export type Action<T> = {| +type: string, +data: T |};
export type Dispatch = (action: Action<*> | ThunkAction) => any;
export type GetState = () => GlobalState;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

// Hot Module Reload
export type HMR$Statuses =
  | 'idle'
  | 'check'
  | 'watch'
  | 'watch-delay'
  | 'prepare'
  | 'ready'
  | 'dispose'
  | 'apply'
  | 'abort'
  | 'fail';

export type HMR$applyCallback = (error: string, outdatedModules: Array<any>) => void;
export type HMR$statusCallback = (status: Statuses) => void;

export type HMR$accept = (options: string | Array<string>, callback: Function) => void;
export type HMR$HMR$decline = (options: string | Array<string>) => void;
export type HMR$dispose = (data: Object) => void;
export type HMR$addDisposeHandler = (callback: dispose) => void;
export type HMR$removeDisposeHandler = (callback: dispose) => void;
export type HMR$status = () => Statuses;
export type HMR$check = (autoApply: Boolean | Object, callback: applyCallback) => void;
export type HMR$addStatusHandler = (callback: statusCallback) => void;
export type HMR$removeStatusHandler = (callback: statusCallback) => void;
