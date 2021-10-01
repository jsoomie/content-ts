import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name: string;
  age: number;
}

type Callback = () => void;

export class User {
  //  Unsure what the key is, but we know its going to be a callback function
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  //  Gets data
  get(propName: string): number | string | undefined {
    return this.data[propName as keyof Partial<UserProps>];
  }

  //  Take the update object and override this.data
  //  Using partial util to be able to change one item in this.update
  set(update: UserProps): void {
    Object.assign(this.data, update);
    console.log(this.data);
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

  async fetch(): Promise<void> {
    const id = this.get("id");
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    this.set(res.data);
  }

  async save(): Promise<void> {
    const id = this.get("id");
    let res: AxiosResponse;
    if (id) {
      res = await axios.put(`http://loclahost:3000/users/${id}`, this.data);
    } else {
      res = await axios.post("http://localhost:3000/users", this.data);
    }
  }
}
