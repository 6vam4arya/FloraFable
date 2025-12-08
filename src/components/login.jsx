import React from 'react';
import './login.css'

const Login = () => {
  return (
    <div className='login'>
      <form className='formContainer'>
        <input type="text" name="username" placeholder="Enter your name" required />
        <input type="password" name="password" placeholder="Enter your password" required />
        <button type="submit">Login</button>
      </form>
    </div>

  );
}

export default Login;
