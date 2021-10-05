import { combineReducers } from "redux";

export const reducers = combineReducers({
  counter: (prev: number) => prev + 1,
});
