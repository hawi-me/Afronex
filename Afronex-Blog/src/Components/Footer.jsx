import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo2__1_-removebg-preview.png'
function Footer() {
  return (
    <footer className="bg-red-300 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row content-center justify-between">
      <img src={logo} className='w-[160px]'></img>

        <p className="text-s text-black content-center">&copy; 2024 afronexblog. All rights reserved.</p>
        
      </div>
    </footer>
  );
}

export default Footer;
