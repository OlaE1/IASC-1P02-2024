
var todayFullDate = new Date();
var todayFullYear = todayFullDate.getFullYear();
var myPrompt = prompt("What is your age?");
var age = parseInt(myPrompt);
var birthYearOutput = todayFullYear - age;

console.log(myPrompt);
console.log(todayFullYear);

document.getElementById("birthYear").innerHTML = birthYearOutput;
