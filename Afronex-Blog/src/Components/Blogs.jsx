import React , {useEffect,useState} from 'react'
import {getDocs , collection} from 'firebase/firestore'
import { db,   } from '../../firebase_cofig';
function Blogs() {
  const [postList , setPostList] = useState([])
  const PostsCollectionsREf = collection(db , "posts")
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(PostsCollectionsREf);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
  
    getPosts(); // Call the function inside useEffect
  
  }, []); // Empty dependency array to execute the effect only once
  
  return (
<div className="container mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        postList.map((post) => {
          return (<>
<div key={post.id} className="bg-white shadow-md p-4 rounded-md">          <div className="font-semibold text-lg mb-2"> <h1>{post.title} </h1></div>
          <div className="text-gray-700 mb-2">{post.postText}</div>
          <div className="text-gray-500">{post.pubDate}</div>
        <h3>{post.author && <div className="text-gray-500">@{post.author.name}</div>}</h3>
        </div>
          </>
        );
        })
      }
      </div>
    </div>
  )
}
 
export default Blogs
