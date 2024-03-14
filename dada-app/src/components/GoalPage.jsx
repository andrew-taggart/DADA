import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import deleteicon from '../assets/delete-icon.png'
import Nav from './Nav'


const Goals = () => {
  const [goals, setGoals] = useState([])
  const [selectedGoal, setSelectedGoal] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Fetch all goals from the backend
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get('http://localhost:3001/goals')
        setGoals(response.data)
        console.log(response)
      } catch (error) {
        setError('Failed to fetch goals')
        console.error(error)
      }
    }

    fetchGoals()
  }, [])

  // Fetch specific goal details by ID
  const handleSelectGoal = (goalId) => {
    navigate(`/goals/${goalId}`)
  }

  // Delete a goal by ID
  const handleDeleteGoal = async (goalId) => {
    try {
      await axios.delete(`http://localhost:3001/goals/${goalId}`)
      setGoals(goals.filter(goal => goal._id !== goalId))
      if (selectedGoal && selectedGoal._id === goalId) {
        setSelectedGoal(null)
      }
    } catch (error) {
      setError('Failed to delete goal')
      console.error(error)
    }
  }

  return (
    <div className='goal-container'>
      <Nav/>
      <h2>Manage Goals</h2>
      {error && <p className="error">{error}</p>}
      <div className='list-container'>
        <ul> 
          {goals.map((goal) => (
            <li key={goal._id}>
              <div className='list-items'>
              <button onClick={() => handleSelectGoal(goal._id)}>{goal.goalName}</button>
              <button onClick={() => handleDeleteGoal(goal._id)}><img src ={deleteicon} width='22px;'></img></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Goals
