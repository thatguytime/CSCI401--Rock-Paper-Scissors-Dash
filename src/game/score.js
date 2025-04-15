let currentScore = 0; // starting point for user

function score(points) {
    let scoreElement = document.getElementById("total-score");
    currentScore += points
    scoreElement.innerHTML = currentScore.toLocaleString() // shows score
}

export default score

