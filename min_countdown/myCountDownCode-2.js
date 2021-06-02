var sec = 6220801*16
// var sec = 10100
var year = parseInt(sec/(1*60*60*24*30*12))
var yearModule = (sec%(1*60*60*24*30*12))
var month = parseInt(yearModule/(1*60*60*24*30))
var monthModule = (yearModule%(1*60*60*24*30))
var day = parseInt(monthModule/(1*60*60*24))
var dayModule = (monthModule%(1*60*60*24))
var hours = parseInt(dayModule/(1*60*60))
var hoursModule = (dayModule%(1*60*60))
var min = parseInt(hoursModule/(1*60))
var sec = (hoursModule%(1*60))
console.log(year,month, day, hours, min, sec);