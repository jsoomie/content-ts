// ACTIONS
import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "./types";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: Action.FETCH_TODOS;
  payload: Todo[];
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
