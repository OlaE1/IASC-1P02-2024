
function multiply(){
  var number1 = document.getElementById("numOne").value;
  var number2 = document.getElementById("numTwo").value;
  var multi = Math.floor(number1 * number2);

  document.getElementById('prices').innerHTML = "$" + multi;
  //document.write(times);
  console.log(multi);
}


function showTheDate(){
  var todayFullDate = new Date();
  var todayFullYear = todayFullDate.getFullYear();
  var todayMonth = todayFullDate.getMonth(); //fix for zero-based month index
  var todayDate = todayFullDate.getDate();
  document.getElementById('theDate').innerHTML = todayFullDate;
  console.log(todayFullDate);
}
