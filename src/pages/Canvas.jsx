import { useState, useEffect } from "react"
import runCanvas from '../game/levels.js'
import clock from '../game/clock.js'
import score from '../game/score.js'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore.js'

export default function Canvas(props) {

    const { user } = useAuthStore()

    console.log(user)

    const [mapIdx, setMapIdx] = useState(0)

    useEffect(() => {
        clock()
        score(0)
        runCanvas(props.level)
    }, [])

    return (
        <>
            <div className="game-stats">
                <div id="timer">Time Left: <span id="time-left"></span></div>
                <div id="score">Total Score: <span id="total-score"></span></div>
                {user.username !== undefined ? <div id="name">Let's go {user.username}! <span id="total-score"></span></div> : <div id="name">Sign-up to save high score</div>}

            </div>

            <canvas id="myCanvas" width="600" height="600"></canvas>

            <div id="joystick-container">
                <div id="joystick"></div>
            </div>

            <br />
            <Link to="/">Back to previous page</Link> <br />
        </>
    )
}