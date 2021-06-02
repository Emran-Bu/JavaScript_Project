var inpS = 6220801;

var fMin = parseInt(inpS/60)
var fhr = parseInt(fMin/60)
var fday = parseInt(fhr/24)
var fmonth = parseInt(fday/30)
var day = parseInt(fday%30)
var hr = parseInt(fhr%24)
var min = parseInt(fMin%60)
var sec = parseInt(inpS%60)

console.log(fmonth,day,hr,min,sec);