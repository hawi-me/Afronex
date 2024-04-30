import React from 'react'
import { Link } from 'react-router-dom';

import logo from './../assets/images/logo2__1_-removebg-preview.png'

function Header() {
  return (
    <div className='flex justify-between items-center'>
      <img src={logo} className='w-[160px]'></img>
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'><Link to='/' className=' text-black'>Home</Link></li>
        <li className='hover:font-bold cursor-pointer text-black'><Link to="/blogs" className="block w-full h-full text-black"> Blogs </Link></li>
        <li className='hover:font-bold cursor-pointer text-black'><Link to="/creatpost" className="block w-full h-full text-black"> CreatePost</Link>
</li>

        <li className='hover:font-bold cursor-pointer text-black'>
        <Link to="/aboutus" className="block w-full h-full text-black"> About Us </Link> </li>
        <span className="hover:font-bold cursor-pointer text-black">
  <Link to="/write" className="block w-full h-full text-black"> Write</Link>
</span>
      </ul> 


      <button className='bg-red-300 rounded-full text-white px-4 py-2 md:px-6 md:py-3'> <a href="./landing" className='text-white'>Logout</a></button>
      
    </div>
  )
}

export default Header
