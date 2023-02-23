export abstract class AbstractRepository<T> {
  abstract list(): Promise<T[]>;
  abstract get(id: number | string): Promise<T | null>;
}
