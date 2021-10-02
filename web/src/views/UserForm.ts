export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input></input>
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement("template");
    if (templateElement) {
      templateElement.innerHTML = this.template();
      this.parent.append(templateElement.content);
    }
  }
}
