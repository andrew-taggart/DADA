import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState()
    axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get('http://localhost:3001/home')
        .then(res => {
            if(res.data.valid) {
                setMessage(res.data.message)
            } else {
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    },[])

    const handleSignOut = () => {
        // Perform sign-out operations here
        // For example, clear user session data or tokens
        
        // Redirect to sign-in page
        navigate('/');
    };

    return (

        <div className="home">
            <div><h5>{message}</h5>
            <p>You have successfully signed in. Enjoy your stay.</p>
            <button onClick={handleSignOut} className="btn-signout">Sign Out</button></div>
        </div>
    );
};

export default Home;
