import { ActionTypes } from "../actions/types";
import { IFetchTodoAction } from "../actions";
import { ITodo } from "../actions";

export const todoReducer = (state: ITodo[] = [], action: IFetchTodoAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodo:
      return action.payload;

    default:
      return state;
  }
};
