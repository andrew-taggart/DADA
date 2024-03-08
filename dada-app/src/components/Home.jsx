import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Perform sign-out operations here
        // For example, clear user session data or tokens
        
        // Redirect to sign-in page
        navigate('/signin');
    };

    return (
        <div className="home-container">
            <h1>Welcome Home!</h1>
            <p>You have successfully signed in. Enjoy your stay.</p>
            <button onClick={handleSignOut} className="btn-signout">Sign Out</button>
        </div>
    );
};

export default Home;
