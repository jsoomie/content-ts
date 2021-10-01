import { Eventing } from "./Eventing";

interface UserProps {
  id?: number;
  name: string;
  age: number;
}

export class User {
  public events: Eventing = new Eventing();

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
}
