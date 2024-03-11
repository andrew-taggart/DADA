const { Schema } = require('mongoose')
const Milestone = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        goal: { type: Schema.Types.ObjectId, ref: 'Goal', required: true },
        taskName : { type: String, required: true },
        dueDate : {type: Date, required: true},
        accomplished: { type: Boolean },
        activeReminder: {type: Boolean },
        description: { type: String, required: true}
    },
    { timestamps: true }
)
module.exports = Milestone