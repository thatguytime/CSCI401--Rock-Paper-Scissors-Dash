import { useState, useEffect, useRef } from "react"
import runCanvas from '../maps/levels.js'
import clock from '../maps/clock.js'
import score from '../maps/score.js'
// import LevelSelect from '../maps/LevelSelect.jsx'
import { Link } from 'react-router-dom'

export default function Canvas(props) {

    // useRef: avoids re-render
    // const canvasRef = useRef(0)

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
            </div>

            <canvas id="myCanvas" width="600" height="600"></canvas>

            <br />
            <Link to="/">Back to previous page</Link> <br />

            {/* Controller: should only show if screen is small enough */}
            <div className="d-pad">
                <button className="d-pad-button" id="move-up">Up</button>
                <button className="d-pad-button" id="move-left">Left</button>
                <button className="d-pad-button" id="move-right">Right</button>
                <button className="d-pad-button" id="move-down">Down</button>
            </div>

        </>
    )
}