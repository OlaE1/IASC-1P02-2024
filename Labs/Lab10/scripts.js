
function theScript(){


var num1 = 10.2;
var num2 = 4.5;
var num3 = 15.6;

var highestNum = Math.max(num1, num2, num3);
var roundedNum = Math.round(highestNum);
var sqNum = Math.sqrt(roundedNum);

document.write(highestNum);
document.write("<br/>");
document.write(roundedNum);
document.write("<br/>");
document.write(sqNum);
document.write("<br/>");


//random math//

var randNum = Math.random();

document.write(randNum);
document.write("<br/>");

var randOneToSix = Math.floor(Math.random() * 6) + 1;

document.write(randOneToSix);
document.write("<br/>");

var randFiftyToHundred = Math.floor(Math.random() * 51) + 50;

document.write(randFiftyToHundred);
document.write("<br/>");

var randMinusTenToPlusTen = Math.floor(Math.random() * 21) - 10;

document.write(randMinusTenToPlusTen);
document.write("<br/>");


 //loops//

for (i = 1; i <= 10; i++){
  document.write("We have looped the loop " + i + " times!");
  document.write("</br>");
}

//conditionals//

var var1 = 8 ;
var var2 = 8;

if (var1 == var2){
  console.log("Numbers are equal: TRUE");
}else{
  console.log("Numbers are equal: FALSE");
}


if (var1 > var2){
  console.log("var1 is bigger!");
}else if (var1 < var2){
  console.log("var2 is bigger!");
}else{
  console.log("The numbers are the same");
}


//onload and timing//
//document.getElementsByID("testing").innerHTML == "Hello World";

repeatScript();


}


function repeatScript(){
  document.write("<div>One Div</div>");
  document.write(Math.floor(Math.random() * 10) + 1);
  setTimeout(repeatScript2, 1000);
}

function repeatScript2(){
  document.write("<div>Two Div</div>");
  document.write(Math.floor(Math.random() * 20) + 1);
  setTimeout(repeatScript, 1000);
}
