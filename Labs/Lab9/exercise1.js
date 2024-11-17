
var start = new Date();

function stopTime() {
    var stop = new Date();
    var elapsedTime = stop - start;

    // Convert milliseconds to seconds
    var seconds = elapsedTime / 1000;

    // Display the elapsed time
    var myAlert = alert("You have been on the page for: " + seconds + " seconds");
    console.log(myAlert);

}
