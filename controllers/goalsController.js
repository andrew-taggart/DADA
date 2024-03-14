const { Goal } = require('../models')
const getAllGoals = async (req, res) => {
    try {
        const userId = req.query.userId
        const query = userId ? { user: userId } : {}
        const goal = await Goal.find(query)
        res.json(goal)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const getGoalById = async (req, res) => {
    try {
        const { id } = req.params
        const goal = await Goal.findById(id)
        if (goal) {
            return res.json(goal)
        }
        return res.status(404).send('goal with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const createGoal = async (req, res) => {
    try {
        console.log("Req body ", req.body);
        
        // add validation to check for a user ID in the request body
        if (!req.body.user) {
            return res.status(400).json({ message: "User ID is required." })
        }

        // Explicitly constructing the goal object to include in the logs
        const { user, goalName, startDate, endDate, accomplished, isActive, notes } = req.body
        const goalData = { user, goalName, startDate, endDate, accomplished, isActive, notes }

        console.log("Goal Data being saved: ", goalData)

        // Creating the goal with structured data
        const goal = new Goal(goalData)
        await goal.save()

        return res.status(201).json({ goal })
    } catch (error) {
        console.error("Error creating goal: ", error)
        return res.status(500).json({ error: error.message })
    }
}

const updateGoal = async (req, res) => {
    try {
        let { id } = req.params;
        let goal = await Goal.findByIdAndUpdate(id, req.body, { new: true })
        if (goal) {
            return res.status(200).json(goal)
        }
        throw new Error("goal not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const deleteGoal = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Goal.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("goal deleted")
        }
        throw new Error("goal item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllGoals,
    getGoalById,
    createGoal,
    updateGoal,
    deleteGoal,
}






