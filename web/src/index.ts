import { User } from "./models";
import axios from "axios";

const user = new User({ id: 1 });

user.events.on("change", () => {
  console.log("Change!");
});

user.events.trigger("change");
