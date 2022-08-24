const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleID: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    googleID: {
        type: String,
        required: true
    },
