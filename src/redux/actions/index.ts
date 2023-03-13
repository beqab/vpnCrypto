import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes, ISetUser, IUser } from "./types";

export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

export interface IFetchTodoAction {
  type: ActionTypes.fetchTodo;
  payload: ITodo[];
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodo = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<ITodo[]>(url);
      dispatch<IFetchTodoAction>({
        type: ActionTypes.fetchTodo,
        payload: response.data,
      });
    } catch (e) {
      console.log("error");
    }
  };
};

export const SetUser = (data: IUser): ISetUser => {
  localStorage.setItem("token", data.token);
  return {
    type: ActionTypes.setUser,
    payload: data,
  };
};
