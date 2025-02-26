import { Link } from 'react-router-dom'

export default function MainMenu() {
    return (
        <div className="main-menu-border pacman-font">
            <h1>Rock Paper Scissors Dash</h1>
            <Link to="/"><button className="main-menu-button pacman-font">Single Player</button></Link>
            <Link to="/"><button className="main-menu-button pacman-font">Multiplayer</button></Link>
            <Link to="/"><button className="main-menu-button pacman-font">Leaderboard</button></Link>
        </div>
    )
}