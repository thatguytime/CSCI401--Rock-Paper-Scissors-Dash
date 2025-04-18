// creates API endpoints
import cors from 'cors'
import express from 'express'
import { test, registerUser } from '../controllers/authController.js'
const router = express.Router()

// middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/register', registerUser)

export default router