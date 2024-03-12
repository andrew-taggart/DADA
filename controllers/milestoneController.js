const { Milestone } = require('../models')
const getAllMilestones = async (req, res) => {
    try {
        const milestone = await Milestone.find()
        res.json(milestone)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const getMilestoneById = async (req, res) => {
    try {
        const { id } = req.params
        const milestone = await Milestone.findById(id)
        if (milestone) {
            return res.json(milestone)
        }
        return res.status(404).send('milestone with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const createMilestone = async (req, res) => {
    try {
        const milestone = await new Milestone(req.body)
        await milestone.save()
        return res.status(201).json({
            milestone
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
const updateMilestone = async (req, res) => {
    try {
        let { id } = req.params;
        let milestone = await Milestone.findByIdAndUpdate(id, req.body, { new: true })
        if (milestone) {
            return res.status(200).json(milestone)
        }
        throw new Error("milestone not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const deleteMilestone = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Milestone.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("milestone deleted")
        }
        throw new Error("milestone item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllMilestones,
    getMilestoneById,
    createMilestone,
    updateMilestone,
    deleteMilestone,
}




