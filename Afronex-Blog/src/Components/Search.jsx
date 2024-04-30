import React from 'react';
import { useState } from 'react';
import weban from './../assets/images/webbanner.png';
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  const tags =[{id:1,name:'All',},
  {id:2,name:'Business',},
  {id:3,name:'Fashion',},
  {id:4,name:'Technology',},
  {id:5,name:'Health and Wellness',},
]
const [activeIndex, setActiveIndex] = useState(0);
  return (
    
    <div className='flex justify-center mt-8 flex-col'>
      <img src={weban} alt="Website Banner" className='rounded-2xl h-[500px] px-[70] md:px-[100px]' />
      <div className='bg-w shadow-lg p-3 rounded-lg mt-3 mx-[25%] flex items-center bg-red-50'>
      <IoSearchOutline style={{ color: 'brown' }} />
        <input type="text" placeholder='Search' className='outline-none ml-2 bg-red-50 text-black' />
      </div>
      <div className='flex gap-10 justify-center mt-5'>
  {tags.map((item, index) => (
    <ul onClick={()=> setActiveIndex(index)} key={item.id} className={`${
      index === activeIndex
        ? 'bg-stone-300 text-white p-3 pb-2 rounded-small md:rounded-full cursor-pointer md:px-4 hover:bg-amber-900'
        : ''
    }`}
    
    style={{
      transition: 'transform 0.3s, border-width 0.3s',
      borderWidth: index === activeIndex ? '1px' : '0px',
      transform: index === activeIndex ? 'scale(1.1)' : 'scale(1)',
    }}>
      <li className='text-black'>{item.name}</li>
    </ul>
  ))}

</div>
    </div>

  );
}

export default Search;
