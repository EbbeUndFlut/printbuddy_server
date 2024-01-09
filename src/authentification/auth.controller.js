import { User } from "../user/user.model.js"
import { createSalt, hashPassword, createToken } from "./auth.service.js"

export async function register(req, res) {
    const user = req.body
    user.salt = createSalt()
    const passwordHash = hashPassword(user.salt, user.password)
    user.password = passwordHash
    const newUser = new User(user)
    try {
        await newUser.save()
        res.status(201).end()
    } catch (err) {
        res.status(500).end()
    }
}

export async function login(req, res) {
    const user = await User.findOne({ email: req.body.email })
    console.log(user)
    if (hashPassword(user.salt, req.body.password) !== user.password) {
        return res.status(401).end()
    }
    res.cookie(
        'printbuddyauth',
        createToken({ id: user.id }),
        {
            httpOnly: true,
            secure: true
        }
    )
    return res.end()
}

export async function logout(req, res) {
    res.end()
}