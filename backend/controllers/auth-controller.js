import { User } from '../model/user.js'
import bcrypt from 'bcryptjs'
import { generateVerificationToken } from '../utils/generateVerificationToken.js'
import { generateJWTToken } from '../utils/generateJWTToken.js'

export const signup = async (req, res) => {
    const { username, email, password } = req.body
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const usernameAlreadyExists = await User.findOne({ username })
        const emailAlreadyExists = await User.findOne({ email })

        if (usernameAlreadyExists) {
            return res.status(400).json({ message: "Username already exists" })
        }

        if (emailAlreadyExists) {
            return res.status(400).json({ message: "Email is already taken" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const verificationToken = generateVerificationToken()

        const user = new User({
            username,
            email,
            password: hashedPassword,
            verificationToken: verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        })

        await user.save()

        // generate a JWT
        generateJWTToken(res, user._id)

        res.status(201).json({
            success: true,
            message: "User was created successfully",
            user: {
                ...user._doc,
                password: undefined // do not want client to access unhashed password!
            }
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

export const login = (req, res) => {
    res.send('Login route for the website man!')
}

export const logout = (req, res) => {
    res.send('Logout route... don\'t leave!')
}
