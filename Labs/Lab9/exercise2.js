
var todayFullDate = new Date();
var todayFullYear = todayFullDate.getFullYear();
var myPrompt = prompt("What is your age?");
var age = parseInt(myPrompt);
var birthOutput = todayFullYear - age;

console.log(myPrompt);
console.log(todayFullYear);

document.getElementById("birthYear").innerHTML = birthOutput;
