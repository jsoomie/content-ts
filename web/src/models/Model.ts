import { AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): Promise<AxiosResponse<any>>;
  save(data: T): Promise<AxiosResponse<any>>;
}

interface Events {
  on(event: string, callback: () => void): void;
  trigger(event: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  async fetch() {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    const res = await this.sync.fetch(id);
    this.set(res.data);
  }

  save() {
    try {
      this.sync.save(this.attributes.getAll());
      this.trigger("save");
      alert("User Saved!");
    } catch (error) {
      this.trigger("error");
    }
  }
}
