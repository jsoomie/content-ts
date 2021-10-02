import { User, UserProps } from "../models";
import { View } from "./index";
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input && input.value !== "") {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>Username: ${this.model.get("name")}</div>
        <div>Age: ${this.model.get("age")}</div>
        <input></input>
        <button class="set-name">Change name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }
}
