import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import dotenv from 'dotenv'
import User from './models/User.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err))

// Register route
app.post('/register', async (req, res) => {
    const { email, username, password } = req.body

    try {
        const existingUser = await User.findOne({ $or: [{ email }, { username }] })
        if (existingUser) return res.status(400).json({ message: 'Username or Email already exists' })

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ email, username, password: hashedPassword })

        await newUser.save()

        res.status(201).json({ message: 'User created successfully!' })
    } catch (err) {
        res.status(500).json({ message: 'No bueno: Server error' })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
