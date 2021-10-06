import { Todo, ActionType, Action } from "../actions";

export const todosReducer = (state: Todo[] = [], action: ActionType) => {
  switch (action.type) {
    case Action.FETCH_TODOS:
      return action.payload;
    case Action.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
