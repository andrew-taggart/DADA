import React, { useState ,useEffect} from 'react'
import axios from 'axios'
export const GoalContext = React.createContext()
 

//Provider function
const  GoalContextProvide = (props) => {

    // Initilizing goals via context 
    const [goals,setGoals] = useState([
        // { goalName: 'Learn React', startDate: '2024-03-09', endDate: '2024-03-23', accomplished:false ,reminder: false ,note: 'Testing'}
    ])

    // useEffect(() => {
    //     const loadAllGoals = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3001/goals')
    //             setGoals(response.data); // Assuming the backend returns an array of goals
    //         } catch (error) {
    //             console.error("Error loading goals:", error)
    //             // Optionally, you could handle this error more gracefully
    //         }
    //     };

    //     loadAllGoals()
    // }, [])

    const addNewGoal = ( goalName, startDate,endDate, accomplished,reminder,note) => {
        setGoals(prevGoals => [
            ...prevGoals,
            { goalName, startDate, endDate, accomplished, reminder, note }
        ])
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

