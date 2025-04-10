let countDownTime = 100; // how many seconds are left

function clock() {


    let timerElement = document.getElementById("time-left"); //display it

    // console.log(timerElement)

    function updateTimer() {//update
        timerElement.innerHTML = countDownTime; //show time left

        if (countDownTime <= 0) { //check if is time's up
            clearInterval(timerInterval); // to stop
            timerElement.innerHTML = "Time's up!";
        } else {
            countDownTime--; //do down
        }
    }

    // timer decrements by 1 second
    let timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
}

export default clock