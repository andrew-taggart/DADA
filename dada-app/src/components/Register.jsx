import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import * as Realm from "realm-web"

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
        axios.post('http://localhost:3001/users', { userName: username, 
        email: email, 
        password: password })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
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

        console.log('Registering:', username, email)
        // Navigate to a success page or login page after successful registration
        // navigate('/');
    };

    // Placeholder for a function that checks if the user already exists
    // In a real application, replace this with a request to your backend API
    const checkUserExists = async (username, email) => {
        // Simulate an API call with a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        // This is a placeholder. You would typically check against your user database here.
        return false; // Assume user does not exist for demonstration
    };

    // useEffect(async () => {
    //     const REALM_APP_ID = "dadadata-vbyeg"
    //     const app = new Realm.App({id: REALM_APP_ID})
    //     const credentials = Realm.Credentials.anonymous()
    //     try {
    //         const user = await app.logIn(credentials)
    //         const allUsers = await user.functions.getAllUsers()
    //         console.log(allUsers)
    //     } catch (error) {

    //     }
    // }, [])

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
