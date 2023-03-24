import React from 'react'
import { useState } from 'react'

const TweetModal = ({setShow,saveTweet,i}) => {
  
   const[tweets,setTweets]=useState('');
    
   const handleChange = (e) => {
    e.preventDefault();
    const {value}=e.target;
      setTweets(value);

   }
   const handleClick = (e) => {
    e.preventDefault();
       let tweetObj={};
       
       tweetObj["Tweet"]=tweets;
       
       saveTweet(tweetObj); 
   }
  return (
    <div className="modal">
        <div className="modal-header">
           <div> Tweet</div> 
           <button className="closeButton" onClick={()=>setShow(false)}>x</button>
        </div>
        <div className="modal-body">
            <textarea className="tweetpost" placeholder="Write your tweets.." value={tweets} onChange={handleChange}></textarea>
        </div>
        <div className="modal-footer">
            <button className="post" onClick={handleClick} >Post</button>
           </div> 
    </div>
  )
}

export default TweetModal