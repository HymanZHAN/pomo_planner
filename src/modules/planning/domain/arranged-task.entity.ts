import { Entity } from "@shared/domain/entity";
import { Duration } from "./duration";

interface ArrangedTaskProps {
  taskId: string;
  duration: Duration;
}

export class ArrangedTask extends Entity<ArrangedTaskProps> {}
