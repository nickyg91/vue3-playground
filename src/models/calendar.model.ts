import { CalendarRepeat } from "./calendar-repeat.enum";
import { DayOfTheWeek } from "./day-of-the-week.enum";

export class Calendar {
  daysOfTheWeek!: DayOfTheWeek[];
  title = "";
  startDate!: Date;
  endDate!: Date;

  repeatsEvery!: CalendarRepeat;
}
