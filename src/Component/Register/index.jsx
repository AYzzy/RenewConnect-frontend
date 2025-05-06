import React, { useState } from 'react';
import './Register.css';

const Register = () =>{
     const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    //   const [message, setMessage] = useState('');
    
      const [isLogin, setIsLogin] = useState(false);
    
      const toggleMode = () => setIsLogin(!isLogin);
    
      const handleSubmit =  (e) => {
        e.preventDefault();
        // handle auth logic here
        alert(`${isLogin ? 'Logging in' : 'Signing up'}...`);
      }

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
    
            <input type="email" placeholder="Email" required/>
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
}
export default Register;
