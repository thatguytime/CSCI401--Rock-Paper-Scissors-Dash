import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function LoginScreen() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {

        //prevents page from reloading when submitting form
        e.preventDefault()

        const res = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
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
                        onChange={handleChange}
                        value={formData.email}
                        required
                    ></input>
                </div>

                <div className="inputField">
                    <label htmlFor='password'>Password:</label>
                    <input
                        type="password"
                        aria-label='password'
                        name="password"
                        placeholder='********'
                        onChange={handleChange}
                        value={formData.password}
                        required
                    ></input>
                </div>

                <button className='submit-form'>submit</button><br />
            </form>

            <Link to="/Register">First time? Sign up</Link>
            <Link to="/">I want to try the game first</Link>
            <Link to="/">Back to previous page</Link>
        </div>
    )
}