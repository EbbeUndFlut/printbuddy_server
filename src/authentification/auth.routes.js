import express from 'express'
import { login, register } from './auth.controller.js'

export const router = new express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/logout')