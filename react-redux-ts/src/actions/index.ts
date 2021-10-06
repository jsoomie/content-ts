// ACTIONS
import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: Action.FETCH_TODOS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: Action.DELETE_TODO;
  payload: number;
}

const URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>(URL);

    dispatch<FetchTodosAction>({
      type: Action.FETCH_TODOS,
      payload: res.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: Action.DELETE_TODO,
    payload: id,
  };
};
