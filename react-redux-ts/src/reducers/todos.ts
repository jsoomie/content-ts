import { Todo, FetchTodosAction, Action } from "../actions";

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case Action.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
