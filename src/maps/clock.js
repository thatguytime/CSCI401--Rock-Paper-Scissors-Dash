function clock() {
    let countDownTime = 10; // 5 seconds

    let timerElement = document.getElementById("timer"); //display it

    console.log(timerElement)

    function updateTimer() {//update
        timerElement.innerHTML = countDownTime; //show time left

        if (countDownTime <= 0) { //check if is time's up
            clearInterval(timerInterval); // to stop
            timerElement.innerHTML = "Time's up!";
        } else {
            countDownTime--; //do down
        }
    }
    let timerInterval = setInterval(updateTimer, 1000); //update every 1000 millisec

    updateTimer();//initialize the timer
}

export default clock