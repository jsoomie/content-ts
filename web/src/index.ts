import { User } from "./models";
import axios from "axios";

const user = new User({ name: " new new", age: 100 });

console.log(user.get("name"));

user.on("change", () => {
  console.log("User changed!!!");
});
