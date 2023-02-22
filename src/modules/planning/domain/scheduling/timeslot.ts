import { ValueObject } from "@shared/domain/value-object";
import { isEqual } from "date-fns";

interface TimeSlotProps {
  start: Date;
  end: Date;
}

export class TimeSlot extends ValueObject<TimeSlotProps> {
  public static of(start: Date, end: Date) {
    return new TimeSlot({ start, end });
  }

  public override equals(vo?: ValueObject<TimeSlotProps> | undefined): boolean {
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
