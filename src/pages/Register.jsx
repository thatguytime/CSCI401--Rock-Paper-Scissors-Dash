import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
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

            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>
                <div className='inputField'>
                    <label htmlFor='username'>Username:</label>
                    <input
                        type="text"
                        aria-label='user name'
                        name="username"
                        placeholder='DrummerGuy123'
                        onChange={(e) => { setData({ ...formData, username: e.target.value }) }}
                        value={formData.username}
                        required
                    ></input>
                </div>

                <div className="inputField">
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        aria-label='email'
                        name="email"
                        placeholder='joeschmo@aol.com'
                        onChange={(e) => { setData({ ...formData, email: e.target.value }) }}
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
                        onChange={(e) => { setData({ ...formData, password: e.target.value }) }}
                        value={formData.password}
                        required
                    ></input>
                </div>

                <button className='submit-form'>Submit</button><br />
            </form>

            <Link to="/login-screen">Back to previous page</Link>
        </div>
    )
}