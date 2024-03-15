const db = require('../db')
const { Goal, User } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
    listGoals = [
        {
            user: '65ef2b370ba628b5c1cd87d4', 
            goalName: 'Finish Project',
            startDate: new Date(2024, 2, 8),
            endDate: new Date(2024, 2, 15),
            accomplished: false,
            isActive: true,
            notes: '#1 group'
        },
        {
            user: '65ef2b370ba628b5c1cd87d5', 
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