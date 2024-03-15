import React, { useState, createContext } from 'react'
import axios from 'axios'

export const GoalContext = createContext()

const GoalContextProvider = (props) => {
  const [goals, setGoals] = useState([]) // Initialize goals as an array

  const addNewGoal = async (user, goalName, startDate, endDate, accomplished, isActive, notes, milestones) => {
    const goalData = { user, goalName, startDate, endDate, accomplished, isActive, notes, milestones }

    try {
      const response = await axios.post('http://localhost:3001/goals', goalData)

      if (response.data && response.data.goal) {
        for (const milestone of milestones) {
          await axios.post('http://localhost:3001/milestones', { ...milestone, goal: response.data.goal._id })
        }
        // Update the local goals state to reflect the newly added goal
        setGoals(currentGoals => [...currentGoals, { ...response.data.goal, milestones }])
      }
    } catch (error) {
      console.error('Unable to Create Goal', error)
      throw error // Propagate error to be handled by caller
    }
  }

  return (
    <GoalContext.Provider value={{ goals, addNewGoal }}>
      {props.children}
    </GoalContext.Provider>
  )
}

export default GoalContextProvider


// Reference

// React Hooks Context CRUD APP : 01 : APP Info, Covered Topics, First Component

// https://www.youtube.com/watch?v=hizCjTn2Ydg&list=PLML_YxxGl1kEZZ1fNCXHGnws9HWEZ5B6R&index=3

