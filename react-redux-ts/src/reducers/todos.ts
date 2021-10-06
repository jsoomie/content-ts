import { Todo, ActionType, Action } from "../actions";

export const todosReducer = (state: Todo[] = [], action: ActionType) => {
  switch (action.type) {
    case Action.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
