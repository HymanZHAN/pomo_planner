import { ValueObject } from "@shared/domain";
import { Duration, DurationProps } from "./duration";
import { startOfMonth, endOfMonth } from "date-fns";

interface MonthProps extends DurationProps {
  year: number;
  month: number;
}

export class Month extends Duration<MonthProps> {
  public get year(): number {
    return this.props.year;
  }

  public get month(): number {
    return this.props.month;
  }

  public static of(currentDate: Date) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);

    return new Month({ year, month, start, end });
  }

  public equals(vo?: Month | undefined): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }

    return this.year === vo.year && this.month === vo.month;
  }

  private constructor(props: MonthProps) {
    super(props);
  }
}
