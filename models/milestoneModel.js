const { Schema } = require('mongoose')
const Milestone = new Schema(
    {
        goal: { type: Schema.Types.ObjectId, ref: 'Goal', required: true },
        taskName : { type: String, required: true },
        dueDate : {type: Date, required: true},
        accomplished: { type: Boolean },
        activeReminder: {type: Boolean },
        description: { type: String}
    },
    { timestamps: true }
)
module.exports = Milestone