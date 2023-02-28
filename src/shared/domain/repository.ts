export abstract class AbstractRepository<T> {
  abstract get(id: number | string): Promise<T | null>;
  abstract listBy(predicate: (i: T) => boolean): Promise<T[]>;
}
