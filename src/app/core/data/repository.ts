import { Observable } from "rxjs";

export abstract class AbstractRepository<T> {
  abstract list(): Observable<T[]>;
  abstract get(id: number): Observable<T | undefined>;
}
