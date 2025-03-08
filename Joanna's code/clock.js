 var countDownTime = 10; // 5 seconds

 var timerElement = document.getElementById("timer"); //display it

 function updateTimer(){//update
    timerElement.innerHTML = countDownTime; //show time left

    if (countDownTime <= 0){ //check if is time's up
        clearInterval(timerInterval); // to stop
        timerElement.innerHTML = "Time's up!";
    } else {
        countDownTime--; //do down
    }
 }
var timerInterval = setInterval(updateTimer, 10000); //update every 1000 millisec

updateTimer();//initialize the timer
