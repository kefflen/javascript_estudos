
//10 min
let tenMin = new Date(1000 * 60 * 10)
let today = new Date()
let result = new Date(tenMin.getTime() + today.getTime())

class TimeUtils { 
  static differenceInMin(inicialDate, finalDate) {
    let differenceMilliseconds = finalDate.getTime() - inicialDate.getTime()
    let min2miliseconds = 60*1000
    return Math.floor(differenceMilliseconds/min2miliseconds)
  }

  static differenceInDay(inicialDate, finalDate) {
    let differenceMilliseconds = finalDate.getTime() - inicialDate.getTime()
    let day2miliseconds = 24 * 60 * 60 * 1000
    return Math.floor(differenceMilliseconds/day2miliseconds)
  }

  static DayToMilliseconds(day) {
    return day * 24 * 60 * 60 *1000
  }
}

let otherDate = new Date()
otherDate.setMinutes(50)
otherDate.setHours(22)

let otherDayDate = new Date()
otherDayDate.setDate(15)
otherDayDate.setMonth(4)
let dmin = TimeUtils.differenceInMin(today, otherDate)
let dday = TimeUtils.differenceInDay(today, otherDayDate)
console.log({
  tenMin: tenMin, today,
  result, dmin, dday
})