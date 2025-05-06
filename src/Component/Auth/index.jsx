import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle auth logic here
    const endpoint = isLogin? 'http://localhost:8045/api/users/login' : 'http://localhost:8045/api/users/register';
    try{
      const response = await fetch(endpoint, {
        method:'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();
      if(response.ok) {
        setMessage(isLogin? 'Login successful' : 'Registration successful');
        console.log(data);
      }else{
        setMessage(data.message || 'Something went wrong')
      }
    }catch(error){
      console.error('Error:', error);
      setMessage('Network error');
    }
    //alert(`${isLogin ? 'Logging in' : 'Signing up'}...`);
  };

  
  

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        {!isLogin && (
           <>
           < input type="text" name="username" placeholder="Username" required/>
           < input type="text" name="fullname" placeholder="Fullname" required/>
           <input type="text" name="phoneno" placeholder="Phone No" required/>
       </>
        )}

        <input type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <button type="submit" className="btn-auth">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p onClick={toggleMode} className="toggle">
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </p>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default AuthForm;
