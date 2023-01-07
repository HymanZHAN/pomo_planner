import { ValueObject } from "@shared/domain/value-object";
import { Duration, DurationProps } from "./duration";
import { getWeek, previousSunday, nextSaturday, isEqual } from "date-fns";

interface WeekProps extends DurationProps {
  weekNumber: number;
}

export class Week extends ValueObject<WeekProps> implements Duration {
  public static of(currentDate: Date) {
    const weekNumber = getWeek(currentDate);
    const start = previousSunday(currentDate);
    const end = nextSaturday(currentDate);

    return new Week({ weekNumber, start, end });
  }

  public override equals(vo?: ValueObject<WeekProps> | undefined): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.props === undefined) {
      return false;
    }

    const { start: selfStart, end: selfEnd } = this.props;
    const { start: otherStart, end: otherEnd } = vo.props;

    return isEqual(selfStart, otherStart) && isEqual(selfEnd, otherEnd);
  }
}