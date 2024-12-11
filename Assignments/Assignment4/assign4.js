
function multiply() {
  var num1 = Number(document.getElementById("numOne").value);
  var num2 = Number(document.getElementById("numTwo").value);
  var multi = num1 * num2;
  document.getElementById('prices').innerHTML = multi;
  //document.write(multi);
}
