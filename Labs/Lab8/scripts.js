document.write("Hello World!");

function changeText(){
document.getElementById("initial").innerHTML = "Replaced the text";
}

function changeTextBack(){
  document.getElementById("initial").innerHTML = "Text will change here";
}

function fancifyText(){
  document.getElementById("one").style.fontSize = "30px";
  document.getElementById("one").style.color = "orange";
  document.getElementById("two").style.marginLeft = "150px";
  document.getElementById("two").style.color = "blue";
  document.getElementById("three").style.textTransform = "uppercase";
  document.getElementById("three").style.color = "red";
  document.getElementById("one").style.color = "green";
}
//this is a comment

var mathX;
mathX = 5;
var mathY = 7;
var someText = "This is a text variable";

function mathExample(x,y){
  mathZ = x + y;
  document.getElementById("mathResult").innerHTML = mathZ;
  console.log("X is equal to: " + x);
  console.log("Y is equal to: " + y);
  console.log("Z is equal to: " + mathY);

}
