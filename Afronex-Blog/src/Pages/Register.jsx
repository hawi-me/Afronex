import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const hadleSubmit = async e =>{
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5173/api/auth/register",
    
      inputs)
      console.log(res)
    } catch (error) {
      console.log(error)
    }



  };

  return (
    <div className='auth'>
      <h1 className='text-black'>Sign-up</h1>
      <form >
        <input required type='text' name="username" placeholder='@username' onChange={handleChange} />
        <input required type='email' name="email" placeholder='email' onChange={handleChange} />
        <input required type='password' name="password" placeholder='********' onChange={handleChange} />
        <button   onClick ={hadleSubmit}><Link to='/'>Sign Up</Link></button>
        <p>This is an error!</p>
        <span className='text-black'>
          Already have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
