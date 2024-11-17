console.log("Hello World");

function buttonClick(){
  console.log("Someone pressed the button! *gasp*");
}

var todayFullDate = new Date();
var todayTime = todayFullDate.getTime();
var todayFullYear = todayFullDate.getFullYear();
var todayMonth = todayFullDate.getMonth(); //fix for zero-based month index
var todayDate = todayFullDate.getDate();
var todayDay = todayFullDate.getDay();
var todayHour = todayFullDate.getHours();
var todayYear = todayFullDate.getYear();



console.log(todayFullDate);
console.log(todayTime);
console.log(todayFullYear);
console.log(todayMonth);
console.log(todayDate);
console.log(todayDay);
console.log(todayHour);
console.log(todayYear);


function showTheDate(){
  document.getElementById("theDate").innerHTML = todayMonth + "/" + todayDate + "/" + todayFullYear;
}

var a = 6;
var b = 8;

console.log(String(a) + String(b) + "5" + 8 + 7);




var myAlert = alert("This is an alert. It alerts you to bad dangerous things!");
console.log(myAlert);

//var myConfirm = confirm("This popup would like you to confirm something; is this todays date?" + todayDate);
//console.log(myConfirm);

//var myPrompt = prompt("Please rate cats on a scale of 1 to 10");
//console.log(myPrompt);


function formOutputs(){
  console.log(document.getElementById("basicText").value);
  console.log(document.getElementById("basicPass").value);

}
