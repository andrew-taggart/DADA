import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'

const Nav = () => {

    const removeToken = (userToken) => {
        
    }
    return (
        <div className='nav-container'>
            <Link to="/home"> Home </Link>
            <Link to="/setGoal">Set Goal</Link>
            <Link to="/goals"> Goals </Link>
            <Link to="/"> Sign Out </Link>
        </div>
    )
}

export default Nav