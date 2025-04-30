import express from 'express'
import { connectionToDatabase } from './database/connectionToDatabase.js'
import dotenv from 'dotenv'
import authRoutes from './routes/auth-route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()

console.log("*****************************")
console.log(process.env.CORS_ORIGIN)

const app = express()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(cookieParser())



connectionToDatabase()

// use and add the router to the middleware handling path
// this will prefix every endpoint we define on the inside of a route
app.use('/api/auth', authRoutes)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})