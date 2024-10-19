
export class Attributes<T extends object> {
  constructor(private data: T) {}

  // K can only be strings of name, age, id
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set<T>(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
