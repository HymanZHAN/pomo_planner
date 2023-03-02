import { Entity } from "@shared/domain";
import { DurationType } from "../arrangement/duration";
import { isSameDay } from "date-fns";

// A scheduled task can be created from task and arranged tasks
// or manually by the user
interface ScheduledTaskProps<> {
  sourceId?: string;
  title: string;
  timeSlot: DurationType;
  note: string;
  isRepeating: boolean;
}

export class ScheduledTask extends Entity<ScheduledTaskProps> {
  public get id(): string {
    return this._id;
  }

  get title() {
    return this.props.title;
  }

  get timeSlot() {
    return this.props.timeSlot;
  }

  get note() {
    return this.props.note;
  }

  get isRepeating() {
    return this.props.isRepeating;
  }

  static create(props: ScheduledTaskProps): ScheduledTask {
    // Validation
    if (!isSameDay(props.timeSlot.start, props.timeSlot.end)) {
      throw new Error("A scheduled task must have same-day start and end.");
    }
    // Creation
    return new ScheduledTask(props);
  }
}
