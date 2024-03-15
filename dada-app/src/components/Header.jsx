import target_icon from '../assets/target.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
    <div className='head-container' onClick = {()=>navigate('/home')}>
        <h1><div className="target"><img src={target_icon} width="53px"></img></div> DADA GOAL </h1>
    </div>)
    }
  
  export default Header