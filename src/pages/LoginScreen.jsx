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
        axios.get('/')

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
                        value={formData.email}
                        onChange={e => { setFormData({ ...formData, email: e.target.value }) }}
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
                        value={formData.password}
                        onChange={e => { setFormData({ ...formData, password: e.target.value }) }}
                        required
                    />
                </div>

                <button className='submit-form'>submit</button><br />
            </form>

            <Link to="/Register">First time? Sign up</Link>
            <Link to="/">I want to try the game first</Link>
            <Link to="/">Back to previous page</Link>
        </div>
    )
}