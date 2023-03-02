import { ValueObject } from "@shared/domain";
import { Duration, DurationProps } from "./duration";
import {
  getWeek,
  previousSunday,
  nextSaturday,
  isEqual,
  startOfDay,
  isSaturday,
  isSunday,
} from "date-fns";

interface WeekProps extends DurationProps {
  weekNumber: number;
}

export class Week extends Duration<WeekProps> {
  public static of(currentDate: Date) {
    const weekNumber = getWeek(currentDate);
    const start = isSunday(currentDate) ? startOfDay(currentDate) : previousSunday(currentDate);
    const end = isSaturday(currentDate) ? startOfDay(currentDate) : nextSaturday(currentDate);

    return new Week({ weekNumber, start, end });
  }

  public equals(vo?: Week | undefined): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }

    return isEqual(this.start, vo.start) && isEqual(this.end, vo.end);
  }

  private constructor(props: WeekProps) {
    super(props);
  }
}
