import { ValueObject } from "@shared/domain/value-object";

export interface DurationProps {
  start: Date;
  end: Date;
}

export type Duration = ValueObject<DurationProps>;
