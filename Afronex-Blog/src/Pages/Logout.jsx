import React from 'react'
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Login from '../Pages/Login.jsx';

function Logout({setIsAuth}) {
    let navigate = useNavigate();  

    const signUserOut = () =>{
        signOut(auth).then(() =>{
          localStorage.clear()
          setIsAuth(false)
          navigate("/login")
    
        })
    
      };
  return (
    
    <div>
    {/* You can add a button or any other UI element to trigger the logout */}
    <button onClick={signUserOut}></button>
</div>
  )
}

export default Logout
