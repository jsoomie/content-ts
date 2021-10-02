import { UserForm } from "./views";
import { User } from "./models";

const user = User.buildUser({ name: "Jennifer", age: 20 });

const root = document.getElementById("root");
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error("root element not found");
}
