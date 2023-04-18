function sumArray() {
  //take the number of passed levels
  // var levels = parseInt(readLine(),10);
  var levels = require("readline");
  var points = new Array();

  var count = 0;
  while (count < levels) {
    var elem = parseInt(readLine(), 10);
    points[count] = elem;
    count++;
  }

  var sum = 0;
  sum = points.reduce(function (a, b) {
    return a + b;
  }, 0);
  //calculate the sum of points

  //output
  console.log(sum);
}

function main() {
  var year = parseInt(readLine(), 10);

  //the output
  console.log(calcCent(year));
}

//complete the function
function calcCent(year) {
  return Math.ceil(year / 100);
}

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000);

function main() {
  var year = parseInt(readLine(), 10);
  var month = parseInt(readLine(), 10);
  var day = parseInt(readLine(), 10);

  console.log(getWeekDay(year, month, day));
}

function getWeekDay(year, month, day) {
  var names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(year, month, day);
  //complete the function
  

  var day = d.getDay();
  return names[day];
}
