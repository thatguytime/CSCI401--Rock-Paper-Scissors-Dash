let countDownTime = 100; 
function clock() {
    

    let timerElement = document.getElementById("clock"); //display it

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

    updateTimer();
}

export default clock