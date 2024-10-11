enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: string): boolean => {
    switch (day.toLowerCase()) {
        case "saturday":
            return true
        case "sunday":
            return true
        default:
            return false
    }
}
