import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from '../../firebase_cofig.js';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {
  let navigate = useNavigate();  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth",true)
      setIsAuth(true)
      // Handle the sign-in result if needed
      navigate("/")
    }).catch((error) => {
      // Handle errors if any
      console.error(error);
    });
  };

  return (
    <div className='auth'>
      <h1 className='text-black'>Login</h1>
      <form>
        <input required type='text' placeholder='@username or email' />
        <input required type='password' placeholder='password' />
        {/* Attach the onClick event to call signInWithGoogle */}
        <button className='login-with-google-btn' onClick={signInWithGoogle}>Login</button>
        <div className="flex items-center mt-4">
          <FcGoogle className="text-red-500 text-3xl mr-2" />
          <p className="inline-block">Sign In With Google to continue</p>
        </div>
        <span className='text-black'>
          Don't you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
