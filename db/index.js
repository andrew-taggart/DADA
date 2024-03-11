const mongoose = require('mongoose')
mongoose
    //.connect('mongodb://127.0.0.1:27017/dadaDatabase')
    .connect('mongodb+srv://toddlf705:V8SGYxue3qF9@cluster0.acpuqv8.mongodb.net/dada-user?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })
mongoose.set('debug', true)
const db = mongoose.connection
module.exports = db