import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const SignIn = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    axios.defaults.withCredentials = true
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/login', 
        { userName: username, 
            password: password }
            )
        .then(res => {
            console.log(res.data._id)
            if(res.data.Signin) {
                navigate('/home')
            } else {
                navigate('/')
            }
        })
        .catch(err => console.log(err)) 
        }
         // Use navigate to redirect


    return (
        <div className="signin-container">
            <div className="signin-background">
                <form onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
                    <div className='username-pw'>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    </div>
                    <button type="submit" className="btn-signin">Sign In</button>
                </form>
                <p className="register-link">
                    Don't have an account? <Link to="/register">Register Here</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
