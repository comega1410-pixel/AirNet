const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true, lowercase: true },
        phone: { type: String, trim: true, default: "" },
        password: { type: String, required: true },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        avatar: {
            type: String,
            default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?v=1"
        },
        isSuperhost: { type: Boolean, default: false },
        isEmailVerified: { type: Boolean, default: false },
        emailOtp: { type: String, default: "" },
        isPhoneVerified: { type: Boolean, default: false },
        phoneOtp: { type: String, default: "" },
        resetPasswordToken: { type: String, default: "" },
        resetPasswordExpires: { type: Date }
    },
    { timestamps: true }
);

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
