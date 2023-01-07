import { ValueObject } from "@shared/domain/value-object";
import { isEqual } from "date-fns";

interface TimeslotProps {
  start: Date;
  end: Date;
}

export class Timeslot extends ValueObject<TimeslotProps> {
  public static of(start: Date, end: Date) {
    return new Timeslot({ start, end });
  }

  public override equals(vo?: ValueObject<TimeslotProps> | undefined): boolean {
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
