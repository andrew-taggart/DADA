import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import arrow from '../assets/back-arrow.png'

const GoalDetails = () => {
    const [goal, setGoal] = useState({
        goalName: '',
        startDate: '',
        endDate: '',
        accomplished: false,
        isActive: true,
        notes: '',
    })
    const [milestones, setMilestones] = useState([])
    const [updateGoal, setUpdate] = useState(false)
    const [error, setError] = useState('')
    const { goalId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchGoalDetails = async () => {
            console.log(goal)
            try {
                const response = await axios.get(`http://localhost:3001/goals/${goalId}`)
                setGoal({ ...response.data, startDate: response.data.startDate.slice(0, 10), endDate: response.data.endDate.slice(0, 10) })
            } catch (error) {
                setError('Failed to fetch goal details')
                console.error(error)
            }
        }

        const fetchMilestones = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/milestones/goal/${goalId}`)
                setMilestones(response.data)
            } catch (error) {
                setError('Failed to fetch milestones')
                console.error(error)
            }
        }

        fetchGoalDetails()
        fetchMilestones()
    }, [goalId])

    const inputChange = (e) => {
        const { name, value } = e.target
        setGoal({ ...goal, [name]: value })
    }
    const toggleStatus = field => {
        setGoal({ ...goal, [field]: !goal[field] })
    }

    const handleUpdateGoal = async () => {
        try {
            await axios.put(`http://localhost:3001/goals/${goalId}`, goal)
            setUpdate(false)
        } catch (error) {
            setError('Failed to update goal')
            console.error(error)
        }
    }

    if (error) return <p>{error}</p>
    if (!goal) return <p>Loading...</p>

    return (
        <div className='goal-detail-container'>
            <Nav/>
            {!updateGoal ? (
                <div>
                    <button onClick={()=> (navigate ('/goals'))} className='goback'><img src= {arrow} width='20'></img>Go Back</button>
                    <h2>Goal Details</h2>
                <div className='detail-container'>
                    {/* Display mode */}
                    <table>
                        <tr>
                            <td><strong>Name:</strong> {goal.goalName}</td>
                        </tr>
                        <tr>
                            <td><strong>Start Date:</strong> {new Date(goal.startDate).toLocaleDateString()}</td>
                            <td><strong>Accomplished:</strong> {goal.accomplished ? 'Yes' : 'No'}</td>
                        </tr>
                        <tr>
                            <td><strong>End Date:</strong> {new Date(goal.endDate).toLocaleDateString()}</td>
                            <td><strong>Active:</strong> {goal.isActive ? 'Yes' : 'No'}</td>
                        </tr>
                        <tr>
                            <td><strong>Notes:</strong> {goal.notes}</td>
                        </tr>
                    </table>
                    <h4>Milestones</h4>
                    {milestones.length > 0 ? (
                        <div>
                            {milestones.map(milestone => (
                                <table key={milestone._id}>
                                    <tr>
                                        <td><strong>Task:</strong> {milestone.taskName}</td>
                                        <td><strong>Due Date:</strong> {new Date(milestone.dueDate).toLocaleDateString()}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Description:</strong> {milestone.description}</td>
                                        <td><strong>Accomplished:</strong> {milestone.accomplished ? 'Yes' : 'No'}</td>
                                    </tr>
                                </table>
                            ))}
                        </div>
                    ) : (
                        <p>No milestones found for this goal.</p>
                    )}
                        <button onClick={() => setUpdate(true)} id='update-btn'>Update</button>
                        {/* Expand code to specify user */}
                        <button onClick ={() => (navigate('/calendar'))}id='calendar'>Calendar</button>
                </div>
                </div>
            ) : (
                <div>
                    <button onClick={()=> history.back()} className='goback'><img src= {arrow} width='20'></img>Go Back</button>
                    <h2>Goal Detail Update</h2>
                <div className='update-container'>
                    {/* Update mode */}
                    <div>
                        <label>Goal Name: </label>
                        <input type="text" name="goalName" value={goal.goalName} onChange={inputChange} />
                    </div>
                    <div>
                        <label>Start Date: </label>
                        <input type="date" name="startDate" value={goal.startDate} onChange={inputChange} />
                    </div>
                    <div>
                        <label>End Date: </label>
                        <input type="date" name="endDate" value={goal.endDate} onChange={inputChange} />
                    </div>
                    <div>
                        <label>Notes: </label>
                        <input type="text" name="notes" value={goal.notes} onChange={inputChange} />
                    </div>
                    <div>
                        <label>Click to change status: </label>
                        <div className='update-btns-spacing'>
                        <button onClick={() => toggleStatus('accomplished')} className='status-btn'>{goal.accomplished ? 'Not Accomplished' : 'Accomplished'}</button>
                        <button onClick={() => toggleStatus('isActive')}className='status-btn'>{goal.isActive ? 'Deactivate' : 'Activate'}</button>
                        </div>
                    </div>
                    <button onClick={handleUpdateGoal} className='update-submit'>Submit</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default GoalDetails
