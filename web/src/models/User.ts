interface UserProps {
  name: string;
  age: number;
}

type Callback = () => void;

export class User {
  //  Unsure what the key is, but we know its going to be a callback function
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  //  Gets data
  get(propName: string): number | string {
    return this.data[propName as keyof UserProps];
  }

  //  Take the update object and override this.data
  //  Using partial util to be able to change one item in this.update
  set(update: Partial<UserProps>): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    //  if this.events[string] undefined fall back to empty array
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName] || [];

    handlers.forEach((callback) => callback());
  }
}
