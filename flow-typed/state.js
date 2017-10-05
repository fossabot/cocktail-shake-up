/* @flow */

export type ApplicationState = {|
  +host: string,
  +port: number,
  +protocol: string,
  +language: string,
  +machineId: string,
|};

export type ProjectState = {|
  +active?: number,
  +list: Array<ProjectData>,
|};

export type UserState = {|
  +exp: string,
  +role: string,
  +token: string,
  +username: string,
|};

export type GlobalState = {|
  application: ApplicationState,
  projects: ProjectState,
  user: UserState,
|};
