import { ValueObject } from "@shared/domain/value-object";
import { Duration, DurationProps } from "./duration";

interface DayProps extends DurationProps {
  date: Date;
}

export class Day extends ValueObject<DayProps> implements Duration {
  public static of(date: Date) {
    const start = new Date(date);
    start.setHours(0, 0, 0);
    const end = new Date(date);
    end.setHours(23, 59, 59);

    return new Day({ date, start, end });
  }

  public override equals(vo?: ValueObject<DayProps> | undefined): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.props === undefined) {
      return false;
    }

    const { date: selfDate } = this.props;
    const { date: otherDate } = vo.props;

    return (
      selfDate.getFullYear() === otherDate.getFullYear() &&
      selfDate.getMonth() === otherDate.getMonth() &&
      selfDate.getDate() === otherDate.getDate()
    );
  }

  private constructor(props: DayProps) {
    super(props);
  }
}
