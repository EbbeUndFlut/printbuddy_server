import { createSalt, hashPassword } from "../../src/authentification/auth.service.js"

test('Get a random Salt with length of 12 Bytes', () => {
    const salt = createSalt()
    console.log(salt)
    expect(salt).toHaveLength(24)
})
test('Get a hashed password', () => {
    const password = hashPassword('abc', 'admin')
    console.log(password)
    expect(password).toBeDefined()
})