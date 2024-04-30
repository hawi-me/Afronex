import React from 'react';
import { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
function Write() {
  const [value, setValue] = useState(0);
console.log(value)
  return (
    <div className='add'>
      <div className="content">
        <input type='text' placeholder='Title'></input>
        <div className="editorcontainer">
        <ReactQuill id = "editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>publish</h1>
          <span>
            <b>Status: </b>
          </span>
          <span>
            <b>Visbility: </b> Public
          </span>
          <input style={{display: "none"}} type='file' id='file'></input>
          <label htmlFor='file'> Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>

          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className='cat'>
            <input type='radio' name='cat' value=" Marketing" id='Marketing'/>
          <label htmlFor='business'> Marketing</label></div>
          <div className='cat'>
            <input type='radio' name='cat' value=" Business" id='business'/>
          <label htmlFor='business'> Business</label></div>
          <div className='cat'><input type='radio' name='cat' value=" Fashion" id='fashion'/>
          <label htmlFor='fashion'> Fashion</label></div>
          <div className='cat'><input type='radio' name='cat' value="Technology" id='tech'/>
          <label htmlFor='tech'>Technology</label></div>
          <div className='cat'><input type='radio' name='cat' value="health" id='health'/>
          <label htmlFor='health'> Health and Wellness</label></div>
          </div>
      </div>
      
    </div>
  )
}

export default Write
