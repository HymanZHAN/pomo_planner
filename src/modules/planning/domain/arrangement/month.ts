import { ValueObject } from "@shared/domain";
import { Duration, DurationProps } from "./duration";
import { startOfMonth, endOfMonth, isEqual } from "date-fns";

interface MonthProps extends DurationProps {
  year: number;
  month: number;
}

export class Month extends ValueObject<MonthProps> implements Duration {
  public static of(currentDate: Date) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);

    return new Month({ year, month, start, end });
  }

  public override equals(vo?: ValueObject<MonthProps> | undefined): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.props === undefined) {
      return false;
    }

    const { year: selfYear, month: selfMonth } = this.props;
    const { year: otherYear, month: otherMonth } = vo.props;

    return isEqual(selfYear, otherYear) && isEqual(selfMonth, otherMonth);
  }

  private constructor(props: MonthProps) {
    super(props);
  }
}
