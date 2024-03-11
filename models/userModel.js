const { Schema } = require('mongoose')
const User = new Schema(
    {
        userName : {type: String, required: true, unique: true},
        password : {type: String, required: true},
        email: {type: String, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        DOB: { type: Date, required: true}
    },
    { timestamps: true }
)
module.exports = User