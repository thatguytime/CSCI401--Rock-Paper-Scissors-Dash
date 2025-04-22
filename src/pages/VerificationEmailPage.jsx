import { data, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore.js'

export default function Register() {
    const navigate = useNavigate()
    const [code, setCode] = useState("")
    const { verifyEmail, isLoading } = useAuthStore()
    const { error } = useAuthStore.getState()

    console.log(`Here is error: \n${error}`)

    //   toast({
    //         title: "Email Verified",
    //         description: "Your email has been successfully verified"
    //     })

    //const { toast } = useToast()

    async function handleSubmit(e) {

        //prevents page from reloading when submitting form
        e.preventDefault()

        // grabs data from form
        await verifyEmail(code)

        console.log(`Here is error again: \n${error}`)
        console.log(`Here isLoading: \n${isLoading}`)
        if (!error && !isLoading) {
            toast.success('Your email has been successfully verified')

            // navigate('/')
        } else {
            toast.error('Invalid or time has expired')
        }



    }

    return (
        <div className="universal-border pacman-font">
            <h1>Rock Paper Scissors Dash</h1>

            <h2>Check email & Enter verification code</h2>

            <form onSubmit={handleSubmit}>
                <div className='inputField'>
                    <label htmlFor='code'>Code:</label>
                    <input
                        type="text"
                        aria-label='code'
                        name="code"
                        placeholder='??????'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                </div>


                <button className='submit-form'>Verify Email</button><br />
            </form>

            <Link to="/login-screen">Back to previous page</Link>
        </div>
    )
}