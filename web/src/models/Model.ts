interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): Promise<void>;
  save(data: T): Promise<void>;
}

interface Events {
  on(event: string, callback: () => void): void;
  trigger(event: string): void;
}

export class Model {}
