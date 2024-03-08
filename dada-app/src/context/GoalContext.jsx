import React, { useState } from 'react'
export const GoalContext = React.createContext()
 

//Provider function
const  GoalContextProvide = (props) => {

    //Initilizing goals via context 
    const [goals] = useState([
        { goalName: 'Learn React', description: 'Testing', startDate: '2024-03-09', endDate: '2024-03-23', reminder: false }
    ])
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
https://www.youtube.com/watch?v=hizCjTn2Ydg&list=PLML_YxxGl1kEZZ1fNCXHGnws9HWEZ5B6R&index=3