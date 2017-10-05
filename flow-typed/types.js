/* @flow */

export type ApplicationData = {|
  +host: string,
  +port: number,
  +protocol: string,
  +machineId: string,
|};

export type ProjectData = {|
  +accessed?: Date,
  +created: Date,
  +datasets: Array<*>,
  +description: string,
  +files: Array<*>,
  +graphs: Array<*>,
  +id: number,
  +meshes: Array<*>,
  +modified: Date,
  +modified?: Date,
  +name: string,
  +pinned: boolean,
  +scenarios: Array<*>,
  +screenshots: Array<*>,
  +scripts: Array<*>,
  +variables: Array<*>,
  +videos: Array<*>,
|};

export type ScenarioData = {|
  +created: string,
  +datasets: Array<*>,
  +description: string,
  +files: Array<*>,
  +graphs: Array<*>,
  +id: number,
  +meshes: Array<*>,
  +modified: string,
  +name: string,
  +pinned: boolean,
  +scenarios: Array<*>,
  +scripts: Array<*>,
  +screenshots: Array<*>,
  +src?: string,
  +variables: Array<*>,
  +videos: Array<*>,
|};

export type UserData = {|
  +exp: string,
  +role: string,
  +token: string,
  +username: string,
|};

export type ErrorData = {| +message: string |};
