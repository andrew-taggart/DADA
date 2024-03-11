import GoalForm from './SetGoal'
import Home from './Home'
import Goals from './GoalPage'
import SignIn from './SignIn'
import Register from './Register'
import Calendar from './Calendar'
import {Routes, Route} from 'react-router-dom'

const Main = () => {
    return (
        <div className='main-container'>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/setgoal" element={<GoalForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/calendar" element={<Calendar />} />
        </Routes>
        </div>
    )
}

export default Main