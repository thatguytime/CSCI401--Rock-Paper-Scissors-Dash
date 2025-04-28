import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useEffect } from 'react'

export default function MainMenu() {
    const { checkAuth, isCheckingAuth, user, logout } = useAuthStore()

    useEffect(() => {
        checkAuth()
    }, [checkAuth])

    if (isCheckingAuth) {
        return <h2>Loading...</h2>
    }

    const handleLogout = async () => {
        await logout()
    }
    return (
        <div className="universal-border pacman-font">
            <h1>Rock Paper Scissors Dash</h1>
            <Link to="/CharacterScreen"><button className="main-menu-button pacman-font">Single Player</button></Link>
            <Link to="/"><button className="main-menu-button pacman-font">Multiplayer</button></Link>
            <Link to="/"><button className="main-menu-button pacman-font">Leaderboard</button></Link>
            {user && <button onClick={handleLogout} className="main-menu-button pacman-font">Logout</button>}
        </div>
    )
}