import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function LoginScreen() {
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

        try {
            const res = await axios.post('http://localhost:5000/api/register', formData)
            console.log('res: ' + res.data.message)
        } catch (err) {
            console.log('No can do buckaroo: ' + err.response.data.error)
        }

        // console.log("Form submitted!")

        // const formData = new FormData(e.currentTarget)
        // const username = formData.get("name")
        // const password = formData.get("password")
        // const email = formData.get("email")
    }

    return (
        <div className="universal-border pacman-font">
            <h1>Rock Paper Scissors Dash</h1>

            <h2>Login / sign up</h2>

            <form onSubmit={handleSubmit}>
                <div className='inputField'>
                    <label htmlFor='username'>Username:</label>
                    <input type="text" aria-label='user name' name="username" placeholder='DrummerGuy123' onChange={handleChange}></input>
                </div>

                <div className="inputField">
                    <label htmlFor='password'>Password:</label>
                    <input type="text" aria-label='password' name="password" placeholder='********' onChange={handleChange}></input>
                </div>

                <div className="inputField">
                    <label htmlFor='email'>Email (optional):</label>
                    <input type="email" aria-label='email' name="email" placeholder='joeschmo@aol.com' onChange={handleChange}></input>
                </div>


                <button className='submit-form'>submit</button><br />
                <button className='submit-form'>Don't log me in</button>
            </form>

            <Link to="/">Back to previous page</Link>
        </div>
    )
}