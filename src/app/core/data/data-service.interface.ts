import { Observable } from "rxjs";

export interface IDataService<T> {
  list: () => Observable<T[]>;
  get: (id: number) => Observable<T | undefined>;
}
