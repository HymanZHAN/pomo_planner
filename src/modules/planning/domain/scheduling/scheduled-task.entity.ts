import { Entity } from "@shared/domain";

interface ScheduledTaskProps {
  taskId: string;
  timeSlot: Duration;
}

export class ScheduledTask extends Entity<ScheduledTaskProps> {}
