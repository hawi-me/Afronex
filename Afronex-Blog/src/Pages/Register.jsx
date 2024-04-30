import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='auth'>
    <h1 className='text-black'>Sign-up</h1>
    <form>
      <input required type='text' placeholder='@username ' />
      <input required type='email' placeholder='email' />

      <input required type='password' placeholder='password' />
      <button>Singup</button>
      <p>This is an error!</p>
      <span className='text-black'>
        Already have an account? <Link to='/login'>Login</Link>
      </span>
    </form>
  </div>
  )
}

export default Register
