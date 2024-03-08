const db = require('../db')
const { User } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const userAccounts = [
        {
            userName: 'adminTaggart',
            password: '9pqubvcf@#&(*!',
            email: 'andrew.taggart53@gmail.com', 
            firstName: 'Andrew',
            lastName: 'Taggart',
            DOB: new Date(1998, 0, 1)
        },
        {
            userName: 'adminMartinez',
            password: '123456324',
            email: 'example.Martinze@gmail.com', 
            firstName: 'Amid',
            lastName: 'Martinez',
            DOB: new Date(1995, 2, 4)
        },
        {
            userName: 'adminBan',
            password: 'g234tgasdf',
            email: 'example.Ban@gmail.com', 
            firstName: 'Daisy',
            lastName: 'Ban',
            DOB: new Date(2000, 4, 2)
        },
        {
            userName: 'adminAnandathasan',
            password: 'q43rbrgsdr',
            email: 'example.Anandathasan@gmail.com', 
            firstName: 'Denesh',
            lastName: 'Anandathasan',
            DOB: new Date(1998, 0, 1)
        },
    ]
    await User.insertMany(userAccounts)
    console.log('Created User accounts')
}
const run = async () => {
    await main()
    db.close()
}

run()
