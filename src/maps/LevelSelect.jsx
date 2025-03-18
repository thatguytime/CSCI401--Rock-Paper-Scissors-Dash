import { Link } from "react-router-dom"
// import Canvas from "../pages/Canvas"

export default function LevelSelect() {
    return (
        <>
            <ul>
                <li><Link to="/canvas1">Level 01</Link></li>
                <li><Link to="/canvas2">Level 02</Link></li>
                <li><Link to="/canvas3">Level 03</Link></li>
                <li><Link to="/canvas4">Level 04</Link></li>
            </ul>
        </>
    )
}