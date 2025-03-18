import express, { json } from 'express'
import { connect } from 'mongoose'
import cors from 'cors'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(json())

connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
