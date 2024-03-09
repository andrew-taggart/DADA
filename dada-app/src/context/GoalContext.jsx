import React, { useState } from 'react'
export const GoalContext = React.createContext()
 

//Provider function
const  GoalContextProvide = (props) => {

    //Initilizing goals via context 
    const [goals,setGoals] = useState([
        { goalName: 'Learn React', startDate: '2024-03-09', endDate: '2024-03-23', accomplished:false ,reminder: false ,note: 'Testing'}
    ])

    const addNewGoal = ( goalName, startDate,endDate, accomplished,reminder,note) => {
        setGoals({goalName,startDate,endDate, accomplished,reminder,note})
    }

    return (
        //  {/* //Passing the values of goals to its childrens (SetupGoals) */}
        <GoalContext.Provider value={{goals}}>           
            {props.children}
        </GoalContext.Provider>
    )
}
export default GoalContextProvide

// Reference

// React Hooks Context CRUD APP : 01 : APP Info, Covered Topics, First Component
// https://www.youtube.com/watch?v=hizCjTn2Ydg&list=PLML_YxxGl1kEZZ1fNCXHGnws9HWEZ5B6R&index=3