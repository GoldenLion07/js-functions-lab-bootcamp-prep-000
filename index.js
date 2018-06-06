function happyHolidays(string) {
  return("Happy holidays!")
}
function happyHolidaysTo(name) {
  return(`Happy holidays, ${name}!`)
}
function happyHolidayTo(holiday, name){
  return(`Happy ${holiday} to ${name}!`)
  if (holiday){
     happyHolidayTo('Independance Day', 'You') === happyHolidayTo('Happy Independance Day, You!') 
  }
  }
function holdayCountdown( days, holiday) {
  return(`It's ${holiday} days until ${days}!`)
}