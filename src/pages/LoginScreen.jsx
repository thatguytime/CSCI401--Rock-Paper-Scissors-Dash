import { Link } from 'react-router-dom'

export default function LoginScreen() {
    function handleSubmit(e) {

        //prevents page from reloading when submitting form
        e.preventDefault()
        console.log("Form submitted!")

        const formData = new FormData(e.currentTarget)
        const username = formData.get("name")
        const password = formData.get("password")
        const email = formData.get("email")
    }

    return (
        <div className="universal-border pacman-font">
            <h1>Rock Paper Scissors Dash</h1>

            <h2>Login / sign up</h2>

            <form onSubmit={handleSubmit}>
                <div className='inputField'>
                    <label htmlFor='username'>Username:</label>
                    <input type="text" aria-label='user name' name="username" placeholder='DrummerGuy123'></input>
                </div>

                <div className="inputField">
                    <label htmlFor='password'>Password:</label>
                    <input type="text" aria-label='password' name="password" placeholder='********'></input>
                </div>

                <div className="inputField">
                    <label htmlFor='email'>Email (optional):</label>
                    <input type="email" aria-label='email' name="email" placeholder='joeschmo@aol.com'></input>
                </div>


                <button className='submit-form'>submit</button>
            </form>

            <p>💀 🚨 👷‍♂️ 🔧 UNDER CONSTRUCTION 🚫 🚧 ⚠️ 🔥 </p>
            <Link to="/">Back to previous page</Link>
        </div>
    )
}