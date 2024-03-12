import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { Await } from 'react-router-dom'
export const GoalContext = React.createContext()
 

//Provider function
const  GoalContextProvide = (props) => {

    // Initilizing goals via context 
    const [goals,setGoals] = useState({})
   
    const addNewGoal = async (user, goalName, startDate,endDate, accomplished,isActive,notes,milestones) => {

    // setGoals({user, goalName, startDate, endDate, accomplished, isActive, notes, milestones })
    const goalData = { user, goalName, startDate, endDate, accomplished, isActive, notes, milestones }

    try{
        // console.log('Before APi call' , goalData)
        const response = await axios.post('http://localhost:3001/goals',goalData)

        if(response.data && response.data.goal._id) {
            for (const milestone of milestones) {
              
              await axios.post('http://localhost:3001/milestones', { ...milestone, goal: response.data.goal._id });
            }
          }
    }catch(error)
    {
        console.log('Unable to Creat Goals files',error)
    }
    }

    return (
        //  {/* //Passing the values of goals to its childrens (SetupGoals) */}
        <GoalContext.Provider value={{goals,addNewGoal}}>           
            {props.children}
        </GoalContext.Provider>
    )
}
export default GoalContextProvide

// Reference

// React Hooks Context CRUD APP : 01 : APP Info, Covered Topics, First Component

// https://www.youtube.com/watch?v=hizCjTn2Ydg&list=PLML_YxxGl1kEZZ1fNCXHGnws9HWEZ5B6R&index=3

