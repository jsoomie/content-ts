/**
 * QUICK FETCH
 *
 * GOAL:
 * 1. Fetch JSON data (todo) and print to screen
 * 2. Format fetched data
 * 3. Add interface
 *
 */

import axios from "axios";

interface Todo {
  //  @interface Todo
  //  fetched data also includes userid(omitted for now)
  id: number;
  title: string;
  completed: boolean;
}

// keys and url
const todoId = 1;
const baseData = "todos";
const baseURL = "https://jsonplaceholder.typicode.com";
const URL = `${baseURL}/${baseData}/${todoId}`;

// fetching using await/async
const fetch = async () => {
  const res = await axios.get(URL);
  console.log(res.data);
  const { id, title, completed } = res.data as Todo;
  logTodo(id, title, completed);
};

// put loggin into a function to be able to call
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID of todo: ${id}
    TITLE of todo: ${title}
    COMPLETED?: ${completed}
  `);
};

// data get
fetch();
