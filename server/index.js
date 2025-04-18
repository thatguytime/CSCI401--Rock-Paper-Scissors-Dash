import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import dotenv from 'dotenv'
import User from './models/User.js'
import authRoutes from './routes/authRoutes.js'

// grab info from .env
dotenv.config()

// middleware
const app = express()

// Body parser middleware (you’ll need this for POST requests!)
app.use(express.json())

// Global CORS middleware — handles preflight, credentials, etc.
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
    //methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow OPTIONS method for preflight
}))

//  handles preflight requests
// app.options('*', cors());


// Use your routes
app.use('/', authRoutes)

// database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`Connected to database foo...`))
    .catch(err => console.log(`No can do buckaroo...\n${err}`))

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
