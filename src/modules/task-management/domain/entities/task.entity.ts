import { Entity } from "@shared/domain/entity";

enum Priority {
  P1,
  P2,
  P3,
  P4,
}

interface TaskProps {
  slug: string;
  title: string;
  content: string | null;
  completed: boolean;
  authorId: number;
}

export class Task extends Entity<TaskProps> {
  get slug() {
    return this.props.slug;
  }

  get title() {
    return this.props.title;
  }

  get content() {
    return this.props.content;
  }

  get completed() {
    return this.props.completed;
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
