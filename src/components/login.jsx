import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  // [name] ensures in object searches for key that matches with value of "name" tag attribute in input field

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // validating user's entered data and storing it
    // check whether email entered by user exists in local storage 
    if (!localStorage.getItem('email')) {
      alert('The entered email ID has not been signed up with our website.')
      Navigate('/SignUp')
      return;
    }
    // otherwise, email id exists
    // then check password key of that same object whose email key had this value
    if (localStorage.getItem('password')!=formData.password) {
      alert('Password is Incorrect');
      return;
    }
    Navigate('/Gallery');
  }
  return (
    <div className='login'>
      <form className='formContainer' onSubmit={handleSubmit} >
        <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter your password" onChange={handleChange}  required />
        <button type="submit">Login</button>
      </form>
    </div>

  );
}

export default Login;
