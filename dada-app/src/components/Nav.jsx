import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-container'>
            <Link to="/home"> Home </Link>
            <Link to="/setGoal">Set Goal</Link>
            <Link to="/goals"> Goals </Link>
            <Link to="/signout"> Sign Out </Link>
        </div>
    )
}

export default Nav