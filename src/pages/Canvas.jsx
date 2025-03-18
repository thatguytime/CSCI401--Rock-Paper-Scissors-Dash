import { useEffect, useRef } from "react"
import runCanvas from '../maps/levels.js'
import clock from '../maps/clock.js'
// import LevelSelect from '../maps/LevelSelect.jsx'
import { Link } from 'react-router-dom'

export default function Canvas(props) {

    // useRef: avoids re-render
    // const canvasRef = useRef(0)

    useEffect(() => {
        clock()
        runCanvas(props.level)
    }, [])

    return (
        <>
            <div id="timer" style={{ border: "1px solid black", height: "50px", maringTop: "none" }}></div>
            <canvas id="myCanvas" width="650" height="600"></canvas>

            {/* pick demo level */}

            {/* <LevelSelect /> */}
            <Link to="/">Back to previous page</Link>
        </>
    )
}