const db = require('../db')
const { Goal, User } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    listGoals = [
        {
            user: 'validUserIdHere', // Replace 'validUserIdHere' with an actual user ID from your user collection
            goalName: 'Finish Project',
            startDate: new Date(2024, 2, 8),
            endDate: new Date(2024, 2, 15),
            accomplished: false,
            isActive: true,
            notes: '#1 group'
        },
        {
            user: 'validUserIdHere', // Replace 'validUserIdHere' with an actual user ID from your user collection
            goalName: 'Present Project',
            startDate: new Date(2024, 2, 8),
            endDate: new Date(2024, 2, 15),
            accomplished: false,
            isActive: true,
            notes: '#1 group'
        },
    ]
    await Goal.insertMany(listGoals)
    console.log('Created Goals')

}
const run = async () => {
    await main()
    db.close()
}

run()
