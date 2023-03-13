import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer, UserReducerType } from "./reducers/auth";
import thunk from "redux-thunk";

export interface IStoreState {
  auth: UserReducerType;
}

export const reducers = combineReducers<IStoreState | []>({
  auth: authReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
