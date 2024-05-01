import {React ,useState  }from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from '../../firebase_cofig.js';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login({ setIsAuth }) {
  let navigate = useNavigate();  
 

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Define error state

  // Rest of your component code...

  const handleRegularLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        // Handle errors here
        setError(error.message); // Set error state
      });
  };

  return (
    <div className='auth'>
 <button className='login-with-google-btn flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300' onClick={signInWithGoogle}>
  <FcGoogle className="text-red-300 text-3xl mr-2" />
  <h4 className="text-lg">Continue with Google Account</h4>
</button>
    </div>

   


//     <div className='auth'>
//       <h1 className='text-black'>Login</h1>
//       <form>
//       <input 
//   required 
//   type='text' 
//   placeholder='@username or email' 
//   value={email} 
//   onChange={(e) => setEmail(e.target.value)} 
// />
// <input 
//   required 
//   type='password' 
//   placeholder='password' 
//   value={password} 
//   onChange={(e) => setPassword(e.target.value)} 
// />
//         {/* Regular Login Button */}
//         <button className='login-btn' onClick={handleRegularLogin}>Login</button>
        
//         {/* Google Login Button */}
        

//         <span className='text-black'>
//           Don't have an account? <Link to='/register'>Register</Link>
//         </span>
//       </form>
      
//     </div>
  );
}

export default Login;
