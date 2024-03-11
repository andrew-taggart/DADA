const db = require('../db')
const { Goal, User, Milestone } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
    listMilestones = [
        {
            goal: '65ef2d0ba2214f93bcd3576f',
            taskName: 'styling',
            dueDate : new Date(2024, 2, 9),
            accomplished: true,
            isActive: true,
            description: 'Making it pretty'
        },
        {
            goal: '65ef2d0ba2214f93bcd3576e',
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