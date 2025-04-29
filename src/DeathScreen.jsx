// needs to display current score
// high score
// total score

import { Link } from 'react-router-dom'

export default function DeathScreen(props) {

    // calculate if current Score is higher than saved high score
    // if so, change here

    return (
        <div>
            <h1>☠️You Died☠️</h1>

            <h2>You current score: {props.score}</h2>

            <h2>Your high Score: </h2>

            <h2>Total Score: </h2>

            <Link to="/">Back to Main Menu</Link>
        </div>
    )

}