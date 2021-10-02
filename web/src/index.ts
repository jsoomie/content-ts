import { UserForm } from "./views";

const elem = document.getElementById("root");
const userForm = new UserForm(elem as Element);
userForm.render();
