import { FetchTodosAction, DeleteTodoAction } from ".";

export enum Action {
  FETCH_TODOS,
  DELETE_TODO,
}

export type ActionType = FetchTodosAction | DeleteTodoAction;
