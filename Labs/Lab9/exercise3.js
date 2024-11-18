var todayFullDate = new Date();


function basicPass() {
  var a = Number(document.getElementById("a").value);
  var b = Number(document.getElementById("b").value);
  var sum = a + b;
document.getElementById("basicPass").textContent = "" + sum;
}
