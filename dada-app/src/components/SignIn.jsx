import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SignInPage = () => {
    const history = useHistory();
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
      history.push('/dashboard'); // Redirect to the dashboard page or home page after sign in
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
      </div>
    );
  };
  
  export default SignInPage