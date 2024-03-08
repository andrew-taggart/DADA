import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-container'>
            <Link to="/"> Home </Link>
            <Link to="/setGoal">Set Goal</Link>
            <Link to="/goals"> Goals </Link>
            <Link to="/register">Sigin In</Link>
        </div>
    )
}

export default Nav