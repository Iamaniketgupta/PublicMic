const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            default: false
        },
        verificationCode: {
            type: String,
            required: false
        },
        admin: {
            type: Boolean,
            default: false
        }
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);