import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-container'>
            <Link to="/"> Home </Link>
            <Link to="/goals"> Goal </Link>
            <Link to="/register">Sigin-In</Link>
            <Link to="/setGoal">Set Goal</Link>
        </div>
    )
}

export default Nav