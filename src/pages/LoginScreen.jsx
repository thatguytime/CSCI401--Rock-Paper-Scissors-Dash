import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router-dom'

export default function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, isLoading, error } = useAuthStore()
    const navigate = useNavigate()

    async function handleSubmit(e) {

        //prevents page from reloading when submitting form
        e.preventDefault()

        await login(email, password)

        navigate('/')

    }

    return (
        <div className="universal-border pacman-font">
            <h1>Rock Paper Scissors Dash</h1>

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <div className="inputField">
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        aria-label='email'
                        name="email"
                        placeholder='joeschmo@aol.com'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button className='submit-form'>submit</button><br />
            </form>

            <Link to="/Register">First time? Sign up</Link>
            {/* <Link to="/">I want to try the game first</Link> */}
            <Link to="/">Back to previous page</Link>
        </div>
    )
}