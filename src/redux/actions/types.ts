export enum ActionTypes {
  fetchTodo,
  setUser,
}

export interface IUser {
  token: string;
  user: {
    first_name: null | string;
    token: string;
  };
}

export interface ISetUser {
  type: ActionTypes.setUser;
  payload: IUser;
}

export type AllActions = ISetUser;
