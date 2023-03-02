import { Entity } from "@shared/domain";
import { DurationType } from "./duration";

interface ArrangedTaskProps {
  taskId?: string;
  content: string;
  arrangedTo: DurationType;
  completed: boolean;
}

export class ArrangedTask extends Entity<ArrangedTaskProps> {
  public get id(): string {
    return this._id;
  }

  get content() {
    return this.props.content;
  }

  get arrangedTo() {
    return this.props.arrangedTo;
  }

  get completed() {
    return this.props.completed;
  }

  static create(props: ArrangedTaskProps): ArrangedTask {
    // Validation
    // Creation
    return new ArrangedTask(props);
  }

  constructor(props: ArrangedTaskProps) {
    super(props);
  }
}
