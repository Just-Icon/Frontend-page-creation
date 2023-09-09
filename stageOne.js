const day = document.getElementById('currentDay');
const time = document.getElementById('currentTime');
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let dateToday = new Date();
let dayToday = dateToday.getDay();
day.innerHTML = `Today is ${daysOfTheWeek[dayToday]}`;
let hours = dateToday.getHours();
let minutes = dateToday.getMinutes();
let milliSeconds = dateToday.getMilliseconds();
let theTime = hours + " : " + minutes + " : " + milliSeconds;
time.innerHTML = theTime;