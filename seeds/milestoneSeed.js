const db = require('../db')
const { Goal, User, Milestone } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
    const userId = await User.find({ type: 'admin' })
    const goalId = await User.find({ type: 'admin' })
    listMilestones = [
        {
            userID: userId[0]._id,
            goalID: goalId[0]._id,
            taskName: 'styling',
            dueDate : new Date(2024, 2, 9),
            accomplished: true,
            isActive: true,
            description: 'Making it pretty'
        },
        {
            userID: userId[0]._id,
            goalID: goalId[0]._id,
            taskName: 'backend',
            dueDate : new Date(2024, 2, 9),
            accomplished: false,
            isActive: true,
            description: 'Making it pretty'
        },
    ]
    await Milestone.insertMany(listMilestones)
    console.log('Created Milestones')
}
const run = async () => {
    await main()
    db.close()
}
run()