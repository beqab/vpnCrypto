import { ActionTypes, AllActions } from "../actions/types";

const intState = {
  token: localStorage.getItem("token") as string | "",
  isAuthenticated: false,
  loading: true,
  user: null,
};

export type UserReducerType = typeof intState;

export const authReducer = (state = intState, action: AllActions) => {
  switch (action.type) {
    case ActionTypes.setUser:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticate: true,
        loading: false,
      };

    default:
      return state;
  }
};
