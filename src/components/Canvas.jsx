import { useEffect, useRef } from "react"
import runCanvas from '../maps/levels.js'

export default function Canvas() {

    // useRef: avoids re-render
    // const canvasRef = useRef(0)

    useEffect(() => {
        runCanvas()
    }, [])

    return (
        <div>
            <canvas id="myCanvas"></canvas>
        </div>
    )
}