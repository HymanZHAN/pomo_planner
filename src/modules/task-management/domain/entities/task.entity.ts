import { AggregateRoot } from "@shared/domain";

export const Priority = {
  P1: "P1",
  P2: "P2",
  P3: "P3",
  P4: "P4",
} as const;
export type PriorityType = (typeof Priority)[keyof typeof Priority];

export const TaskStatus = {
  BACKLOGGED: "backlogged",
  ONGOING: "ongoing",
  STUCK: "stuck",
  DONE: "done",
  ARCHIVED: "archived",
} as const;
export type TaskStatusType = (typeof TaskStatus)[keyof typeof TaskStatus];

interface TaskProps {
  slug: string;
  title: string;
  content: string | null;

  startDate?: Date;
  endDate?: Date;

  priority?: PriorityType;
  status: TaskStatusType;
  authorId: number;
}

export class Task extends AggregateRoot<TaskProps> {
  get slug() {
    return this.props.slug;
  }

  get title() {
    return this.props.title;
  }

  get content() {
    return this.props.content;
  }

  get startDate() {
    return this.props.startDate;
  }

  get endDate() {
    return this.props.endDate;
  }

  get status() {
    return this.props.status;
  }

  get priority() {
    return this.props.priority;
  }

  private constructor(props: TaskProps, id?: string) {
    super(props, id);
  }

  public static create(props: TaskProps, id?: string) {
    // Validation
    // Creation
    return new Task(props, id);
  }
}
