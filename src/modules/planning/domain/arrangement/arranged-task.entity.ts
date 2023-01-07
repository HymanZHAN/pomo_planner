import { Entity } from "@shared/domain/entity";
import { Duration } from "./duration";

interface ArrangedTaskProps {
  taskId: string;
  arrangedTo: Duration;
}

export class ArrangedTask extends Entity<ArrangedTaskProps> {}
