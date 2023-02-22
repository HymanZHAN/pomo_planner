import { Entity } from "@shared/domain/entity";

interface ScheduledTaskProps {
  taskId: string;
  timeSlot: Duration;
}

export class ScheduledTask extends Entity<ScheduledTaskProps> {}
