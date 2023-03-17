import { Duration, DurationProps } from "./duration";

interface DayProps extends DurationProps {
  date: Date;
}

export class Day extends Duration<DayProps> {
  public get date(): Date {
    return this.props.date;
  }

  public static of(date: Date) {
    const start = new Date(date);
    start.setHours(0, 0, 0);
    const end = new Date(date);
    end.setHours(23, 59, 59);

    return new Day({ date, start, end });
  }

  public override equals(vo?: Day | undefined): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }

    return (
      this.date.getFullYear() === vo.date.getFullYear() &&
      this.date.getMonth() === vo.date.getMonth() &&
      this.date.getDate() === vo.date.getDate()
    );
  }

  private constructor(props: DayProps) {
    super(props);
  }
}
