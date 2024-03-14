import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import * as Realm from "realm-web"

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); 

    const [alertMSGUser, setAlertMSGUser] = useState('')
    const [alertMSGEmail, setAlertMSGEmail] = useState('')
    const [alertMSGPassword, setAlertMSGPAssword] = useState('')
    const [alertMSGRegister, setAlertMSGRRegister] = useState('')

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = async (e) => {
        try{
        e.preventDefault();       
        const respons = await axios.get(`http://localhost:3001/users`)
        if(respons)
        {
            let listofUsers = respons.data
            let isUSerExist = false
            listofUsers.map((e) =>{
                if(e.userName === username){
                    setAlertMSGUser("An account with this username already exists.")
                    isUSerExist = true
                }else if (e.email === email){
                    setAlertMSGEmail("An account with this email already exists.")
                    isUSerExist = true
                }
            })
            if(isUSerExist) return
        }
        const emailRegex = /\S+@\S+\.\S+/
        if (!emailRegex.test(email)) {
            setAlertMSGEmail("Please enter a valid email address.")
            return
        }

        if (password !== confirmPassword) {
            console.log("not match password")
            setAlertMSGPAssword("Passwords do not match.")            
            return
        }

            axios.post('http://localhost:3001/users', { userName: username, 
            email: email, 
            password: password })
            .then(
                res => console.log(res.data),
                setAlertMSGRRegister("Sucesfully Registered"),
                navigate('/home')
                )
            .catch(
                error => console.log(error),
                setAlertMSGRRegister("Unable to register :", error.message)
                )
        
        
       
    }catch(error){
        setAlertMSGRRegister("Registration error :", error.message)
    }
    }


    const handelClearForm = () => {

        if(alertMSGUser === "An account with this username already exists."){
            setAlertMSGUser('')
            setUsername('')
            return
        } else if (alertMSGEmail){
            setAlertMSGEmail('')
            setEmail('')
        } else if (alertMSGPassword ==="Passwords do not match."){
            setAlertMSGPAssword('')
            setConfirmPassword('')
        } else {
            setUsername('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setAlertMSGRRegister('')
        }
    }

    return (
        <div className="register-container">
            <h2>Register</h2>
            {/* {error && <p className="error">{error}</p>}  */}
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
                </div>               
                   <div>{alertMSGUser && <div className='alt-msg'>{alertMSGUser}</div>}</div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div>{alertMSGEmail && <div className='alt-msg'>{alertMSGEmail}</div>}</div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                </div>
                <div>{alertMSGPassword && <div className='alt-msg'>{alertMSGPassword}</div>}</div>
                <div>{alertMSGRegister && <div className='alt-msg'>{alertMSGRegister}</div>}</div>
                <button type="button" className="btn-clear" onClick={handelClearForm}>Clear</button>
                <button type="submit" className="btn-register">Register</button>
            </form>
            
        </div>
    );
};

export default Register;
