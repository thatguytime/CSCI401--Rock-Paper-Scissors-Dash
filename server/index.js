import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import dotenv from 'dotenv'
import User from './models/User.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

// database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`Connected to database foo...`))
    .catch(err => console.log(`No can do buckaroo...\n${err}`))


const app = express()

// 🟢 Global CORS middleware — handles preflight, credentials, etc.
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

// 🟢 Body parser middleware (you’ll need this for POST requests!)
app.use(express.json())

// 🟢 Use your routes
app.use('/', authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
