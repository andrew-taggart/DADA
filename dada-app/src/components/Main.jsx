import GoalForm from './SetGoal'
import Home from './Home'
import Goals from './GoalPage'
import SignIn from './SignIn'
import Register from './Register'
import Calendar from './Calendar'
import GoalDetails from './GoalDetails'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'



const Main = () => {

    return (
        <div className='main-container'>
         <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/setgoal" element={<GoalForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path='/goals/:goalId' element={<GoalDetails />} />
        </Routes>
        </div>
    )
}

export default Main