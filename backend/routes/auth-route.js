// defines routes
import express from 'express'
import { signup, login, logout, verifyEmail, forgotPassword, resetPassword, checkAuth } from '../controllers/auth-controller.js'
import { verifyToken } from '../middleware/verifyToken.js'

// middleware endpoints used to create routes => http request
const router = express.Router()

// delete this
router.get('/signup', (req, res) => {
    res.send('Signup route foo!')
})

// post => sending data from client to the server
// get => sending data from server to client

// handler function => second parameter
router.post('/signup', signup)

router.post('/login', login)

router.post('/logout', logout)

router.post('/verify-email', verifyEmail)

router.post("/forgot-password", forgotPassword)

router.post("/reset-password/:token", resetPassword)

router.get('/check-auth', verifyToken, checkAuth)

export default router