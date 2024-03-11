const { Goal } = require('../models')
const getAllGoals = async (req, res) => {
    try {
        const goal = await Goal.find()
        res.json(goal)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const getGoalById = async (req, res) => {
    try {
        const { id } = req.params
        const goal = await UseGoalr.findById(id)
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
        const goal = await new Goal(req.body)
        await goal.save()
        return res.status(201).json({
            goal
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
const updateGoal = async (req, res) => {
    try {
        let { id } = req.params;
        let goal = await Goal.findByIdAndUpdate(id, req.body, { new: true })
        if (goal) {
            return res.status(200).json(tv)
        }
        throw new Error("goal not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const deleteGoal = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await TV.findByIdAndDelete(id)
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






