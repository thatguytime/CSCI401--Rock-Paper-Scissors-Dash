import { useEffect, useRef } from "react"
import runCanvas from '../maps/levels.js'
import { Link } from 'react-router-dom'

export default function Canvas() {

    // useRef: avoids re-render
    // const canvasRef = useRef(0)

    useEffect(() => {
        runCanvas()
    }, [])

    return (
        <>
            <canvas id="myCanvas" width="650" height="600"></canvas>
            <Link to="/">Back to previous page</Link>
        </>
    )
}