import { ValueObject } from "@shared/domain";

export interface DurationProps {
  start: Date;
  end: Date;
}

export abstract class Duration<T extends DurationProps> extends ValueObject<T> {
  get start() {
    return this.props.start;
  }

  get end() {
    return this.props.end;
  }

  public abstract override equals(vo?: ValueObject<DurationProps> | undefined): boolean;
  constructor(props: T) {
    super(props);
  }
}

export type DurationType = Duration<DurationProps>;
