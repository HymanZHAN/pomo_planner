export abstract class AbstractRepository<T> {
  abstract list(): T[];
  abstract get(id: number | string): T | undefined;
}
