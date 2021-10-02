export class Attributes<T> {
  constructor(private data: T) {}

  //  Type of K can only ever be one of the different KEYS in T
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
    console.log(this.data);
  }
}
