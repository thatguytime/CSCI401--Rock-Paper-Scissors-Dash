// the functions that connect the API endpoints to the backend
import User from '../models/User.js'


export const test = (req, res) => {
    res.json('test is working')
}

// requesting data from database is not instantanious
// hense async function
export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        // check if username is entered
        const usernameExist = await User.findOne({ username })
        if (usernameExist) {
            return res.json({
                error: 'Sorry, username is already taken! Maybe add a number or 2?'
            })
        }

        if (!username) {
            return res.json({
                error: 'username is required'
            })
        }

        // check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: 'Sorry, password must be at least 6 characters long'
            })
        }

        // check email
        const emailExist = await User.findOne({ email })
        if (emailExist) {
            return res.json({
                error: 'Sorry, this email is already taken'
            })
        }

        const user = await User.create({
            username, email, password
        })

        return res.json(user)
    } catch (err) {
        console.log(`No can do bucaroo...\n${err}`)
    }
}
