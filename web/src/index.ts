import { User } from "./models";

const user = new User({ id: 1, name: "this is the newest name", age: 111 });

user.on("save", () => {
  console.log(user);
});

user.save();
