import { DayOfTheWeek } from "./day-of-the-week.enum";

export class Calendar {
  daysOfTheWeek?: DayOfTheWeek[] | undefined;
  title = "";
  startDate?: Date | undefined;
  endDate?: Date | undefined;
}
