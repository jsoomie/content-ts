import axios from "axios";

const URL = "http://localhost:3000/users";
// axios.post(URL, {
//   name: "Alice",
//   age: 18,
// });

axios.get(`${URL}/1`);
