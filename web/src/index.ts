import { User } from "./models";

const user = new User({ name: "Alice", age: 18 });

user.on("change", () => {
  console.log("Change #1");
});

user.on("change", () => {
  console.log("Change #2");
});

user.on("save", () => {
  console.log("Saved!");
});

user.trigger("change");
user.trigger("save");
