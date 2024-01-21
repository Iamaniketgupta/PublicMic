const { createHmac, randomBytes } = require("crypto");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: "/images/default.png",
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        salt: {
            type: String,
            // required: true,
        },
        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            enum: ["USER", "ADMIN"],
            default: "USER"
        }

    },
    { timestamps: true }
);

userSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256", salt)
        .update(user.password)
        .digest("hex");

        this.salt =salt;
        this.password = hashedPassword;
        next();
});

module.exports = mongoose.model("user", userSchema);