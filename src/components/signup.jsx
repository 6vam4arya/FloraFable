import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'

const signup = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    password: "",
    confirmPassword: "",
    email: ""
  })

  const handleChange=(e)=>{
    const{name,value} = e.target;
    setFormData(prev=>({...prev,[name]:value}))
  }
  // [name] ensures in object searches for key that matches with value of "name" tag attribute in input field

  const handleSubmit=(e)=>{
    e.preventDefault();
    const {fullname,password,confirmPassword,email} = formData;
    // validating user's entered data and storing it
    if(password!==confirmPassword){
      alert("Password should be same")
      return;
    }
    // otherwise, everything's correct 
    // store user's data and direct to login Page
    console.log(formData);
    Navigate('/LogIn');
    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
    // localStorage.password('password',password);
  }

  return (
    <div className='signup'>

      <form className='signUPContainer' onSubmit={handleSubmit}>
        <input type="text" name="fullname" onChange={handleChange} placeholder="Enter your name" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Enter your password" required />
        <input type='email' name='email' onChange={handleChange} placeholder='Enter your email ID' required />
        <input type="password" name="confirmPassword" onChange={handleChange} placeholder='Confirm Password' required />
        <button type="submit">SignUp</button>
      </form>

    </div>
  )
}

export default signup