import { useState, useEffect } from "react"
import runCanvas from '../game/levels.js'
import clock from '../game/clock.js'
// import Score from '../game/score.js'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore.js'
import { useNavigate } from 'react-router-dom'


export default function Canvas(props) {

    const { user } = useAuthStore()
    //const [mapIdx, setMapIdx] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        clock()
        runCanvas(props.level, () => { navigate('/death-screen') }, 0)
    }, [])

    return (
        <>
            <div className="game-stats">
                <div id="timer">Time Left: <span id="time-left"></span></div>
                <div id="score">Total Score: <span id="total-score"></span></div>
                {user && user.username !== undefined
                    ? <div id="name">Let's go {user.username}! <span id="total-score"></span></div>
                    : <div id="name">Sign-up to save high score</div>
                }

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