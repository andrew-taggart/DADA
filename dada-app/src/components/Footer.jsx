import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='profile-container'>
                <div className="profile" id="amid">
                    Amid Martinez 
                    <div><a href="https://github.com/amidmartinez"><img src={github}></img></a>
                    <a href="https://www.linkedin.com/in/amid-martinez/"><img src={linkedin}></img></a></div>
                </div>
                <div className="profile" id="andrew">
                    Andrew Taggart
                    <div><a href="https://github.com/andrew-taggart"><img src={github}></img></a>
                    <a href="https://www.linkedin.com/in/andrew-h-taggart/"><img src={linkedin}></img></a></div>
                </div>
                <div className="profile" id="daisy">
                    Daisy Ban
                    <div><a href="https://github.com/toddlf705"><img src={github}></img></a>
                    <a href="https://www.linkedin.com/in/daisy-ban/"><img src={linkedin}></img></a></div>
                </div>
                <div className="profile" id="denesh">
                    Denesh Anandathasan
                    <div><a href="https://github.com/DeneshA"><img src={github}></img></a>
                    <a href="https://www.linkedin.com/in/deneshananthadasan/"><img src={linkedin}></img></a></div>
                </div>
            </div>
            <div className="contact-us">
                <h5>Contact Us</h5>
            </div>
        </div>
    )
}

export default Footer