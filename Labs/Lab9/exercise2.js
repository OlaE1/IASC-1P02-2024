

var myPrompt = prompt("What is your age?");
var age = Number(myPrompt);
console.log(myPrompt);

var todayFullDate = new Date();
var todayFullYear = todayFullDate.getFullYear();
var birthYearOutput = todayFullYear - age;

console.log(todayFullYear);
document.getElementById("birthYear").innerHTML = birthYearOutput;
