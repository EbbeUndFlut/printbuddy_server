import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
    salt: {
        type: String
    }
})

export const User = mongoose.model('User', userSchema)