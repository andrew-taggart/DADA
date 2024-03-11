
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn'

const Home = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Perform sign-out operations here
        // For example, clear user session data or tokens
        
        // Redirect to sign-in page
        navigate('/signin');
    };

    return (

        <div className="home">
            <SignIn />
            <div><h5>(api call for motivation quotes)</h5>
            <p>You have successfully signed in. Enjoy your stay.</p>
            <button onClick={handleSignOut} className="btn-signout">Sign Out</button></div>
        </div>
    );
};

export default Home;
