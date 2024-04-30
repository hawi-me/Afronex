import React from 'react'
import { Link } from 'react-router-dom';
import techImage from '../assets/images/tech-new.jpeg'; // Import the image
import FashionImage from '../assets/images/fashion1.png'; // Import the image
import HealthImage from '../assets/images/heathewell.jpeg';
import MarkImage from '../assets/images/marketing.jpeg';

import businImage  from '../assets/images/busuness.jpeg';

import { MdReadMore } from "react-icons/md";
import {getDocs} from 'firebase/firestore'
function Home() {
  const posts = [
    {id: 1,
    title: "Business",
    desc: "Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the...",
    img: businImage
    },
    
      {id: 2,
        title: "Fashion",
        desc:"Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the...",
        img: FashionImage}
        ,
        {id: 3,
          title: "Technology",
          desc:"Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the...",
          img: techImage},
          {id: 4,
            title: "Health and wellness",
            desc:"Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the...",
            img: HealthImage},
            {id: 5,
              title: "Marketing",
              desc:"Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the..",
              img: MarkImage},
    
    ]
  return (
    <div className='home'>
      <div className='posts'>
      {posts.map((post) => (
  <div className='post' key={post.id}>
    <div className='img'> <img src={post.img} alt = ''></img>
    </div>
    <div className='content'> 
    <Link to = '/post/${post.id}'> 
    <h1>{post.title}</h1>
    </Link>
<h3><p className='text-black my-4 text-lg'>{post.desc}</p></h3>   
  <button className='flex items-center text-white bg-gray-200 py-2 px-4 rounded hover:bg-gray-300 hover:text-gray-800'>
  <Link to="/post/:id">Read More</Link>
  <MdReadMore className="ml-1" />
</button>    
    </div>
  </div>
))}
      </div>
    </div>
  )
}

export default Home
