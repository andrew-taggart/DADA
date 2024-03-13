import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // State to hold any registration error

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Hi')
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Simulated function to check if the user already exists
        const userExists = await checkUserExists(username, email);
        if (userExists) {
            setError('An account with this username or email already exists.');
            return;
        }

        // Assuming validation passes and the user does not exist,
        // proceed to registration logic here (e.g., sending data to your backend)



        console.log('Registering:', username, email);
        // Navigate to a success page or login page after successful registration
        navigate('/signin');
    };

    // Placeholder for a function that checks if the user already exists
    // In a real application, replace this with a request to your backend API
    const checkUserExists = async (username, email) => {
        // Simulate an API call with a delay
        // await new Promise(resolve => setTimeout(resolve, 1000));
        const respons = await axios.get(`http://localhost:3001/users`)
        if(respons)
        {
            console.log("Users ",respons.data)
            return true
        }
        // This is a placeholder. You would typically check against your user database here.
        return false; // Assume user does not exist for demonstration
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>} {/* Display any registration error */}
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                </div>
                <button type="submit" className="btn-register">Register</button>
            </form>
        </div>
    );
};

export default Register;
