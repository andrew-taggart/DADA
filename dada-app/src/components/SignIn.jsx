import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link along with useNavigate
import axios from 'axios'


// const response = await axios.get(`http://localhost:3001/users/name/adminBan`)
    // console.log(response.data)

// const usernamedb = response.data[0].userName
// const pwdb = response.data[0].password
// console.log(usernamedb)
// console.log(pwdb)


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


    const handleSubmit = (e) => {
        e.preventDefault();

        if (username == usernamedb && password == pwdb)
            navigate('/home') 

            else if (username !== usernamedb ||  password !== pwdb) 
                {alert ('please enter a correct username or password')}; // Use navigate to redirect
    };
    


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
