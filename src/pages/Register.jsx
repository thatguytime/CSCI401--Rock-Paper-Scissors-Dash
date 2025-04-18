import { data, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })

    function updateForm(value) {
        return setFormData(prev => {
            return { ...prev, ...value }
        })
    }

    async function handleSubmit(e) {

        //prevents page from reloading when submitting form
        e.preventDefault()

        const { username, email, password } = formData
        console.log("HERE" + username)

        try {
            const { data } = await axios.post('/register', {
                username, email, password
            })

            if (data.error) {
                toast.error(data.error)

            } else {
                setFormData({
                    email: '',
                    username: '',
                    password: ''
                })
                toast.success('Registration successful. Welcome!')
                // navigate('/login')
            }
        } catch (err) {
            console.log("The error: \n" + err)
            toast.error('Registration failed. Try again later')
        }

        //axios.get('/')


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
                        value={formData.username}
                        onChange={(e) => updateForm({ username: e.target.value })}
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
                        value={formData.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
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
                        onChange={(e) => updateForm({ password: e.target.value })}
                        required
                    />
                </div>

                <button className='submit-form'>Submit</button><br />
            </form>

            <Link to="/login-screen">Back to previous page</Link>
        </div>
    )
}