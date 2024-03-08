import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='profile-container'>
                <div className="profile" id="amid">
                    Amid Martinez 
                    <div><a href=""><img src={github}></img></a>
                    <a href=""><img src={linkedin}></img></a></div>
                </div>
                <div className="profile" id="andrew">
                    Andrew Taggart
                    <div><a href=""><img src={github}></img></a>
                    <a href=""><img src={linkedin}></img></a></div>
                </div>
                <div className="profile" id="daisy">
                    Daisy Ban
                    <div><a href=""><img src={github}></img></a>
                    <a href=""><img src={linkedin}></img></a></div>
                </div>
                <div className="profile" id="denesh">
                    Denesh Anandathasan
                    <div><a href=""><img src={github}></img></a>
                    <a href=""><img src={linkedin}></img></a></div>
                </div>
            </div>
            <div className="contact-us">
                <h5>Contact Us</h5>
            </div>
        </div>
    )
}

export default Footer