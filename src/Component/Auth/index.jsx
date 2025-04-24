import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle auth logic here
    alert(`${isLogin ? 'Logging in' : 'Signing up'}...`);
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
