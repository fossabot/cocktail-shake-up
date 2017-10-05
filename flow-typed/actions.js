/* @flow */

export type ApplicationAction = {| +id?: string |};

export type ProjectsAction = {|
  +id?: number,
  +list?: Array<ProjectData>,
  +project?: ProjectData,
  +update?: ProjectData,
|};

export type UserAction = {|
  +exp?: string,
  +role?: string,
  +token?: string,
  +username?: string,
|};
