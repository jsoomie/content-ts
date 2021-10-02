import { User } from "../models";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.onHeaderHover,
    };
  }

  onButtonClick(): void {
    console.log("Hello there");
  }

  onHeaderHover(): void {
    console.log("H1 hovered!");
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>Username: ${this.model.get("name")}</div>
        <div>Age: ${this.model.get("age")}</div>
        <input></input>
        <button>Click Me</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    if (templateElement) {
      templateElement.innerHTML = this.template();
      this.bindEvents(templateElement.content);
      this.parent.append(templateElement.content);
    }
  }
}
