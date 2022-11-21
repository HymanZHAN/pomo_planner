import { Entity } from "./entity";

export abstract class AggregateRoot<T> extends Entity<T> {
  get id(): string {
    return this._id;
  }
}
