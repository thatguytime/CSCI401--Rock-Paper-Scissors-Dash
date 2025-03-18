import { useEffect, useRef } from "react"
import runCanvas from '../maps/levels.js'
import clock from '../maps/clock.js'
import { Link } from 'react-router-dom'

export default function Canvas() {

    // useRef: avoids re-render
    // const canvasRef = useRef(0)

    useEffect(() => {
        clock()
        runCanvas()
    }, [])

    return (
        <>
            <div id="timer" style={{ border: "1px solid black", height: "50px", maringTop: "none" }}></div>
            <canvas id="myCanvas" width="650" height="600"></canvas>

            {/* pick demo level */}


            <Link to="/">Back to previous page</Link>
        </>
    )
}