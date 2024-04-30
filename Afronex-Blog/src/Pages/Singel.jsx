import React from 'react';
import { FaEdit } from 'react-icons/fa';
import profile from '../assets/images/edil.jpg';
import techImage from '../assets/images/tech-new.jpeg';
import edit from '../assets/images/edit2.jpeg';
import deleteIcon from '../assets/images/delim.jpeg';
import { Link } from 'react-router-dom';
import Menu from '../Components/Menu.jsx';





function Single() {
  return (
    <div className='single'>
      <div className='content'>
        <img src={techImage} alt="content Picture" />
        <div className='user'>
          <img src={profile} alt="User Profile" />
          <div className='info'>
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={'/write?edit=2'}>
            <img src={edit}/>
            </Link>
            
            <img src={deleteIcon}/>

          </div>
          
        </div>
        <div className='postdis'><h1 className='text-black'>title of the blog</h1>
          <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, numquam. Laudantium, pariatur quas perferendis modi, ullam quo magni optio, unde nihil officiis amet rerum facilis dignissimos incidunt? Perspiciatis, reiciendis doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus quasi voluptate rem temporibus tenetur quisquam in vel iure perferendis libero tempora maxime quos, ratione incidunt pariatur ipsum mollitia minima!</p>
        </div>

          
        

      </div>
      <div className='menu'><Menu></Menu></div>
    </div>
  );
}

export default Single;
