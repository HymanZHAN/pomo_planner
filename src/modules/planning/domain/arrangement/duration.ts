import { ValueObject } from "@shared/domain";

export interface DurationProps {
  start: Date;
  end: Date;
}

export type Duration = ValueObject<DurationProps>;
