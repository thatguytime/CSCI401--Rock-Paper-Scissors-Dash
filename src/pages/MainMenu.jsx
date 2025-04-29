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
            {user ? <h1>Hello {user.username}!</h1> : <h1>Rock Paper Scissors Dash</h1>}
            {/* <Link to="/CharacterScreen"><button className="main-menu-button pacman-font">Single Player</button></Link> */}
            <Link to="/CharacterScreen"><button className="main-menu-button pacman-font">Single Player</button></Link>
            {/* Did not complete multiplayer in time */}
            {/* <Link to="/"><button className="main-menu-button pacman-font">Multiplayer</button></Link> */}
            {user && <button onClick={handleLogout} className="main-menu-button pacman-font">Logout</button>}
            {!user && <Link to="/login-screen"><button className="main-menu-button pacman-font">Login / Signup</button></Link>}
            <Link to="/"><button className="main-menu-button pacman-font">High Scores</button></Link>
            <Link to="/about"><button className="main-menu-button pacman-font">About Us</button></Link>
        </div>
    )
}