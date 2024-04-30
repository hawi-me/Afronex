import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth  } from '../../firebase_cofig';
import { useNavigate } from 'react-router-dom';
// import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';

function CreatePost( {isAuth}) {
    let navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [pubDate, setPubDate] = useState("");
    const [image, setImage] = useState(null);
    const postCollectionRef = collection(db, "posts");

    const creatpost = async () => {
        // Upload image to Firebase Storage
        // const storageRef = ref(storage, `images/${image.name}`);
        // await uploadBytes(storageRef, image);

        // Get download URL of the uploaded image
        // const imageURL = await getDownloadURL(storageRef);

        // Add post data to Firestore with image URL
        await addDoc(postCollectionRef, {
            title,
            postText,
            pubDate,
            // imageURL, // Store image URL instead of the file object
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        });
        navigate("/");
    };

    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0]; // Get the first file selected by the user
    //     setImage(file); // Update the image state with the selected file
    // };
    useEffect ( () => {
        if (!isAuth){
            navigate("/login")
        }
    }, []);

    return (
        <div className='container mx-auto mt-10'>
            <div className='max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8'>
                <h1 className='text-2xl font-bold mb-4'>Create A Post</h1>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Title:</label>
                    <input
                        className='form-input mt-1 block w-full'
                        placeholder='TITLE...'
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Post:</label>
                    <textarea
                        className='form-textarea mt-1 block w-full'
                        placeholder='Post...'
                        onChange={(event) => setPostText(event.target.value)}
                    ></textarea>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Publication Date:</label>
                    <input
                        type='date'
                        className='form-input mt-1 block w-full'
                        placeholder='Publication date'
                        onChange={(event) => setPubDate(event.target.value)}
                    />
                </div>
                {/* <div className='mb-4'>
                    <label className='block text-gray-700'>Image:</label>
                    <input
                        type='file'
                        accept='image/*'
                        className='form-input mt-1 block w-full'
                        onChange={handleImageUpload}
                    />
                </div> */}
                <button
                    className='bg-red-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={creatpost}
                >
                    Submit Post
                </button>
            </div>
        </div>
    );
}

export default CreatePost;
