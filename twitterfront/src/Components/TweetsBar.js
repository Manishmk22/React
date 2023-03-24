import React from 'react'
import { useState,useEffect } from 'react'
import TweetModal from './TweetModal'
import {FaEdit,FaWindowClose} from "react-icons/fa";
import EditModal from './EditModal';
const TweetsBar = () => {
var i=2;
  const [show,setShow]=useState(false )
  const [tweetList, setTweetList] = useState([{id:0,Tweet:"Hii"},{id:1,Tweet:"Hello"}])
  const [edit,setEdit] = useState(false);
  const [currentEdit,setCurrentEdit] = useState(-1);

  const showModal =()=>{
      setShow(true);
  }
  
   useEffect(()=>{
   console.log(tweetList)
  },[tweetList])

  const saveTweet = (tweetObj) => {
    let temp = [...tweetList];
    temp.push(tweetObj);
    setTweetList(temp);
    setShow(false);
    console.log(`TweetList${tweetList}`);
    
}
const handleDelete=(index)=>{
  
  var dup = [...tweetList]
  console.log(index);
  dup.splice(index,1)
  setTweetList(dup);
}



const updateTask = (obj,index) => {
  console.log(index)
  let tempList = [...tweetList]
  tempList[index] = obj;
  console.log(obj);
  setTweetList(tempList)
}


  return (
    <div>
      <div>
     <button className='tweetButton' onClick={showModal}>Tweet</button>
    
     </div>
    <div>
    {show && <TweetModal setShow={setShow} saveTweet={saveTweet} i={i} />}
    </div>
   
       <div className="con2">
    
    
     
     
     
      {tweetList.map((obj,index)=>{
        
        return <div className='TweetLists' >
          <div className='TweetContent'>
        <div className='TweetImage'><img src="https://static.vecteezy.com/system/resources/previews/003/513/755/original/mouse-cartoon-cute-rat-illustration-free-vector.jpg " alt='img' id="image1" />
        </div>
        <div className='TweetMessage'><strong>Remy</strong><span  id="rem">  @remy Mar 2023<br/></span>
          <p>{obj.Tweet}</p>
          </div>
          </div>
          <div className='EditClose'>
            <FaEdit className='Edit' onClick = {() => {
              setCurrentEdit(index)
              setEdit(true)
              }} />
            <FaWindowClose className='Close' onClick={()=>{
            handleDelete(index)
          }} /></div>
         
     </div>
     
      }
      )} 
       {edit && <EditModal  setEdit={setEdit} updateTask = {updateTask} tweetObj = {tweetList[currentEdit]} index={currentEdit} tweet={tweetList[currentEdit].Tweet}/>}
      </div>
     
    </div>
    
  )

}

export default TweetsBar




