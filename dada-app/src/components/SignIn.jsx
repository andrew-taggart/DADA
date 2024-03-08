import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link along with useNavigate

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
        // Perform validation and authentication here
        // If successful, redirect to another route
        navigate('/'); // Use navigate to redirect
    };

    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
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
                <button type="submit" className="btn-signin">Sign In</button>
            </form>
            <p className="register-link">
                Don't have an account? <Link to="/register">Register Here</Link>
            </p>
        </div>
    );
};

export default SignIn;
