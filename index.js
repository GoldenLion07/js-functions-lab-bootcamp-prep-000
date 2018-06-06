function happyHolidays(string) {
  return("Happy holidays!")
}
function happyHolidaysTo(name) {
  return(`Happy holidays, ${name}!`)
}
function happyHolidayTo(holiday, name){
  return(`Happy ${holiday} to ${name}!`)
  if (holiday){
     happyHolidayTo('Happy Independance Day to You!') === happyHolidayTo('Happy Independance Day, You!') 
  }
  }
function holidayCountdown( holiday, days) {
  return(`It's ${days} days until ${holiday}!`)
}