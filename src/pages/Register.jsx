import { data, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore.js'

export default function Register() {
    const navigate = useNavigate()
    const [username, setUserame] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signup } = useAuthStore()

    async function handleSubmit(e) {

        //prevents page from reloading when submitting form
        e.preventDefault()

        // grabs data from form
        await signup(username, email, password)

        // continues to page that varifies email
        navigate('/verify-email')
    }

    return (
        <div className="universal-border pacman-font">
            <h1>Rock Paper Scissors Dash</h1>

            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>
                <div className='inputField'>
                    <label htmlFor='username'>Username:</label>
                    <input
                        type="text"
                        aria-label='username'
                        name="username"
                        placeholder='DrummerGuy123'
                        value={username}
                        onChange={(e) => setUserame(e.target.value)}
                        required
                    />
                </div>

                <div className="inputField">
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        aria-label='email'
                        name="email"
                        placeholder='joeschmo@aol.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="inputField">
                    <label htmlFor='password'>Password:</label>
                    <input
                        type="password"
                        aria-label='password'
                        name="password"
                        placeholder='********'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button className='submit-form'>Submit</button><br />
            </form>

            <Link to="/login-screen">Back to previous page</Link>
        </div>
    )
}