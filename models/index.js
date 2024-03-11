const mongoose = require('mongoose')
const userSchema = require('./userModel')
const goalSchema = require('./goalModel')
const milestoneSchema = require('./milestoneModel')
const User = mongoose.model('User', userSchema)
const Goal = mongoose.model('Goal', goalSchema)
const Milestone = mongoose.model('Milestone', milestoneSchema)
module.exports = {
    User,
    Goal,
    Milestone
}