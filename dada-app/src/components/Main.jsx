import GoalForm from './SetGoal'
import Home from './Home'
import Goals from './GoalPage'
import SignIn from './SignIn'
import {Routes, Route} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='home-container'>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/register" element={<SignIn />} />
            <Route path="/setgoal" element={<GoalForm />} />
        </Routes>
        </div>
    )
}

export default Footer