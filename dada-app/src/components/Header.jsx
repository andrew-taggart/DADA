import Nav from './Nav'
import target_icon from '../assets/target.png'

const Header = () => {
    return (
    <div className='head-container'>
        <h1><div className="target"><img src={target_icon} width="53px"></img></div> DADA GOAL </h1>
        <Nav />
    </div>)
    }
  
  export default Header