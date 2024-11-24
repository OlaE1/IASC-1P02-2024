function plus() {
  var num1 = Number(document.getElementById("numberOne").value);
  var num2 = Number(document.getElementById("numberTwo").value);

  //var add = Math.floor(num1 + num2);
  var add = num1 + num2;

  document.getElementById('result').innerHTML = add;
}

function minus() {
  var num1 = document.getElementById("numberOne").value;
  var num2 = document.getElementById("numberTwo").value;

  var sub = Math.floor(num1 - num2);


  document.getElementById('result').innerHTML = sub;
}

function times() {
  var num1 = document.getElementById("numberOne").value;
  var num2 = document.getElementById("numberTwo").value;

  var multi = Math.floor(num1 * num2);


  document.getElementById('result').innerHTML = multi;
}

function divide() {
  var num1 = document.getElementById("numberOne").value;
  var num2 = document.getElementById("numberTwo").value;

  var div = Math.floor(num1 / num2);
  document.getElementById('result').innerHTML = div;
}
