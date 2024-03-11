const { Schema } = require('mongoose')
const Goal = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        goalName : { type: String, required: true },
        startDate : {type: Date, required: true},
        endDate: {type: Date, required: true},
        accomplished: { type: Boolean },
        isActive: {type: Boolean },
        notes: { type: String, required: true}
    },
    { timestamps: true }
)
module.exports = Goal