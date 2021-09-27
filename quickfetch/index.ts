/**
 * QUICK FETCH
 *
 * GOAL: Fetch JSON data (todo) and print to screen
 */

import axios from "axios";

const todoId = 1;
const dataBase = "todos";
const URL = `https://jsonplaceholder.typicode.com/${dataBase}/${todoId}`;

const fetch = async () => {
  const res = await axios.get(URL);
  console.log(res.data);
};
