import { UserEdits } from "./views";
import { User } from "./models";

const user = User.buildUser({ name: "Jennifer", age: 20 });

const root = document.getElementById("root");
if (root) {
  const userEdit = new UserEdits(root, user);
  userEdit.render();
} else {
  console.log("here");
}
