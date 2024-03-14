const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const cookieParser = require('cookie-parser')


//import Controllers
const goalsController = require('./controllers/goalsController')
const userController = require('./controllers/userController')
const milestoneController = require('./controllers/milestoneController')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(logger('dev'))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => res.send('welcome to our landing page!'))

//CRUD
app.get('/goals', goalsController.getAllGoals)
app.get('/users', userController.getAllUsers)
app.get('/milestones', milestoneController.getAllMilestones)
app.get('/home', userController.verifyUser, (req, res) => {
    return res.json ({valid: true, message: "Welcome back!"})
})
// app.get('/goals/:name', goalsController.getAllGoals)

app.get('/goals/:id', goalsController.getGoalById)
app.get('/users/:id', userController.getUserById)
app.get('/users/name/:name', userController.getUserByUsername)
app.get('/milestones/:id', milestoneController.getMilestoneById)


app.post('/goals', goalsController.createGoal)
app.post('/users', userController.createUser)
app.post('/milestones', milestoneController.createMilestone)
app.post('/login', userController.SigninUser)


app.put('/goals/:id', goalsController.updateGoal)
app.put('/users/:id', userController.updateUser)
app.put('/milestones/:id', milestoneController.updateMilestone)

app.delete('/goals/:id', goalsController.deleteGoal)
app.delete('/users/:id', userController.deleteUser)
app.delete('/milestones/:id', milestoneController.deleteMilestone)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))