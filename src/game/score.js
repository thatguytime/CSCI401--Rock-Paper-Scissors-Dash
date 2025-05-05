class Score {

    constructor(points) {
        this.totalPoints = points
    }

    add(points) {
        this.totalPoints += points
    }

    getPoints() {
        return this.totalPoints
    }

    reset() {
        this.totalPoints = 0
    }

    displayScore() {
        const scoreElement = document.getElementById("total-score");

        if (scoreElement)
            scoreElement.innerHTML = this.totalPoints.toLocaleString() // shows score
    }
}

export default Score

