import React, { useState } from 'react';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock auth logic (replace with real authentication in the future)
    console.log(`${isLogin ? 'Logging in' : 'Signing up'}...`);
    // On successful login/signup, redirect to marketplace
    navigate('/marketplace');
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        {!isLogin && (
          <input type="text" placeholder="Full Name" required />
        )}

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit" className="btn-auth">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p onClick={toggleMode} className="toggle">
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;