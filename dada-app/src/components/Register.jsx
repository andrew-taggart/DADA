import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [alertUsername, setAlertUsername] = useState('')
    const [error, setError] = useState(''); // State to hold any registration error

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Simulated function to check if the user already exists
        const userExists = await checkUserExists(username, email);
        if (userExists) {
            // setError('An account with this username or email already exists.');
            setAlertUsername('An account with this username or email already exists.')
            return;
            } else {
                axios.post('http://localhost:3001/users', 
                { userName: username, 
                    email: email, 
                    password: password })
                .then(res => console.log(res.data))
                .catch(err => console.log(err))}

        // Assuming validation passes and the user does not exist,
        // proceed to registration logic here (e.g., sending data to your backend)

        console.log('Registering:', username, email)
        // Navigate to a success page or login page after successful registration
        navigate('/');
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
            <div className='register-background'>
                {error && <p className="error">{error}</p>} {/* Display any registration error */}
                <form className='register-form' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
                        {alertUsername && <div className='alt-msg'>{alertUsername}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="password" value={password} onChange={handlePasswordChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword" id='confirmpw'>Confirm PW:</label>
                        <input type="password" className="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                    </div>
                    <button type="submit" className="btn-register">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
