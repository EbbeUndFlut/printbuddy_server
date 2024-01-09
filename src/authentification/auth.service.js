import { randomBytes, createHmac } from 'node:crypto'
import jwt from 'jsonwebtoken'
export function getSalt() {

}

export function createSalt() {
    return randomBytes(12).toString('hex')
}

export function hashPassword(salt, password) {
    const hmac = createHmac('sha256', salt)
    hmac.update(password)
    return hmac.digest('hex')
}

export function createToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
}

export function validateToken(token) {
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        return payload
    } catch (err) {
        throw new Error('invalid token')
    }

}