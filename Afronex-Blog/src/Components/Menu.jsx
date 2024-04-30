import React from 'react'
import techImage from '../assets/images/tech-new.jpeg'; // Import the image
import { MdReadMore } from "react-icons/md";


const Menu = () => {
    const posts = [
        {id: 1,
        title: "Business",
        desc: "Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the...",
        img: techImage
        },
        
          {id: 2,
            title: "Fashion",
            desc:"Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the...",
            img: techImage}
            ,
            {id: 3,
              title: "Technology",
              desc:"Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the...",
              img: techImage},
              {id: 4,
                title: "Health and wellness",
                desc:"Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the...",
                img: techImage},
                {id: 5,
                  title: "Marketing",
                  desc:"Let me share my experiences with Temu and Homary as they compare to their far more expensive U.S. and Japanese competitors. We’ll end with my Product of the Week, the Qualcomm Snapdragon X Elite, which is currently between six and 12 months ahead of AMD and Intel and sets the near-term bar for the...",
                  img: techImage},
        
        ]
  return (
    
    <div className='menu'>
                <h1>Other posts you may like</h1>

        {posts.map(post=>(<div className='post' key={post.id}>

            <img src={post.img} alt=''></img>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <button className='flex items-center text-white bg-gray-200 py-2 px-4 rounded hover:bg-gray-300 hover:text-gray-800'>
  Read More
  <MdReadMore className="ml-1" />
</button>              
        </div>
            ))}
      
    </div>
  )
}

export default Menu
