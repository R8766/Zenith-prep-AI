const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
    type: String,
    default: null
    },

    currentStreak: {
    type: Number,
    default: 0
    },

    longestStreak: {
    type: Number,
    default: 0
    },

    lastStudyDate: {
    type: Date
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;