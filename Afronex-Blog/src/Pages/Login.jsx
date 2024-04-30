import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='auth'>
      <h1 className='text-black'>Login</h1>
      <form>
        <input required type='text' placeholder='@username or email' />
        <input requiredtype='password' placeholder='password' />
        <button>login</button>
        <p>This is an error!</p>
        <span className='text-black'>
          Don't you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
