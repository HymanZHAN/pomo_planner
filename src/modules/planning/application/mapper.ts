import { ArrangedTask } from "@planning/domain";
import { ArrangedTaskDto } from "./arranged-task.dto";

export const toArrangedTaskDto = (input: ArrangedTask): ArrangedTaskDto => {
  return {
    id: input.id,
    content: input.content,
    completed: input.completed,
  };
};
