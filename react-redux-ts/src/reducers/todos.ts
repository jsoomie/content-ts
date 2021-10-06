import { Todo, FetchTodosAction } from "../actions";
import { Action } from "../actions/types";

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case Action.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
