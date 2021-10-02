import { UserForm } from "./views";
import { User } from "./models";

const user = User.buildUser({ name: "Jennifer", age: 20 });

const elem = document.getElementById("root");
const userForm = new UserForm(elem as Element, user);
userForm.render();
