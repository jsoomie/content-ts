import { User } from "./models";
import axios from "axios";

const user = new User({ id: 1 });

user.on("change", () => {
  console.log(user);
});

user.fetch();
