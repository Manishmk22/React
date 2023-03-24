import React from 'react'
import { useState } from 'react'
const EditModal = ({tweet,index,setEdit, updateTask, tweetObj}) => {

    const[edittweets,setEditTweets]=useState('');
    console.log(`Index: ${index}`);
    
   const handleChange = (e) => {
    e.preventDefault();
    const {value}=e.target;
    setEditTweets(value);

   }

  

const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj['Tweet'] = edittweets;
   updateTask(tempObj,index)
   console.log(index);
   setEdit(false)
}
  return (
    <div className="modal"  >
        <div className="modal-header" >
           <div> Edit</div> 
           <button className="closeButton" onClick={()=>setEdit(false)}>x</button>
        </div>
        <div className="modal-body">
            <textarea className="tweetpost"  value={edittweets} onChange={handleChange}></textarea>
        </div>
        <div className="modal-footer">
            <button className="post" onClick={handleUpdate} >Update</button>
           </div> 
    </div>
  )
}

export default EditModal