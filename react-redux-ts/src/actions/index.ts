// ACTIONS
import axios from "axios";
import { Dispatch } from "redux";

const URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get(URL);
    dispatch({
      type: "FETCH_TODOS",
      payload: res.data,
    });
  };
};
