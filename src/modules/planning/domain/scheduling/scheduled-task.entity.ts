import { Entity } from "@shared/domain/entity";

interface ScheduledTaskProps {
  taskId: string;
  timeslot: Duration;
}

export class ScheduledTask extends Entity<ScheduledTaskProps> {}
