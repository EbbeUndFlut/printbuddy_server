import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { router as authRouter } from './src/authentification/auth.routes.js'


await mongoose.connect('mongodb://printbuddy_database:27017/printbuddy')

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

app.get('/health', (req, res) => {
    return res.status(200).end()
})
app.use('/api/auth', authRouter)
export const server = app.listen(process.env.PORT, console.log(process.env.PORT))