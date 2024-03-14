const router = require('express').Router()
const User = require('../models/userModel')


router.get('/register',(req,res) => {
res.send("Hi its from reigster")

})

module.exports = router