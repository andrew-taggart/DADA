import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'

const GoalDetails = () => {
    const [goal, setGoal] = useState({
        goalName: '',
        startDate: '',
        endDate: '',
        accomplished: false,
        isActive: true,
        notes: '',
    })
    const [updateGoal, setUpdate] = useState(false)
    const [error, setError] = useState('')
    const { goalId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchGoalDetails = async () => {
            console.log(goal)
            try {
                const response = await axios.get(`http://localhost:3001/goals/${goalId}`)
                setGoal({...response.data, startDate: response.data.startDate.slice(0,10), endDate: response.data.endDate.slice(0,10)})
            } catch (error) {
                setError('Failed to fetch goal details')
                console.error(error)
            }
        }

        fetchGoalDetails()
    }, [goalId])

    const inputChange = (e) => {
        const { name, value } = e.target
        setGoal({ ...goal, [name]: value})
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
            <h2>Goal Details</h2>
            {!updateGoal ? (
                <div className='detail-container'>
                    {/* Display mode */}
                    <p><strong>Name:</strong> {goal.goalName}</p>
                    <p><strong>Start Date:</strong> {new Date(goal.startDate).toLocaleDateString()}</p>
                    <p><strong>End Date:</strong> {new Date(goal.endDate).toLocaleDateString()}</p>
                    <p><strong>Accomplished:</strong> {goal.accomplished ? 'Yes' : 'No'}</p>
                    <p><strong>Active:</strong> {goal.isActive ? 'Yes' : 'No'}</p>
                    <p><strong>Notes:</strong> {goal.notes}</p>
                    <button onClick={() => setUpdate(true)} id='update-btn'>Update</button>
                    {/* Expand code to specify user */}
                    <button onClick ={() => (navigate('/calendar'))}id='calendar'>Calendar</button>
                </div>
            ) : (
                <div className='detail-container'>
                    {/* Update mode */}
                    <div>
                        <input type="text" name="goalName" value={goal.goalName} onChange={inputChange} />
                    </div>
                    <input type="date" name="startDate" value={goal.startDate} onChange={inputChange} />
                    <input type="date" name="endDate" value={goal.endDate} onChange={inputChange} />
                    <input type="text" name="notes" value={goal.notes} onChange={inputChange} />
                    <button onClick={() => toggleStatus('accomplished')}>{goal.accomplished ? 'Not Accomplished' : 'Accomplished'}</button>
                    <button onClick={() => toggleStatus('isActive')}>{goal.isActive ? 'Deactivate' : 'Activate'}</button>
                    <button onClick={handleUpdateGoal}>Submit</button>
                </div>
            )}

        </div>
    )
}

export default GoalDetails
