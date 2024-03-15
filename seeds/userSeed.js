const db = require('../db')
const { User } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
    const userAccounts = [
        {
            userName: 'adminTaggart',
            password: '9pqubvcf@#&(*!',
            email: 'andrew.taggart53@gmail.com',
        },
        {
            userName: 'adminMartinez',
            password: '123456324',
            email: 'example.Martinze@gmail.com',
        },
        {
            userName: 'adminBan',
            password: 'g234tgasdf',
            email: 'example.Ban@gmail.com',
        },
        {
            userName: 'adminAnandathasan',
            password: 'q43rbrgsdr',
            email: 'example.Anandathasan@gmail.com',
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