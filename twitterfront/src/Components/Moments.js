import React from 'react'
import ProfileBar from './ProfileBar'
import { useState,useContext,useEffect } from 'react'
import { Context } from './Navbar'
import { useNavigate  } from 'react-router-dom'
const Moments = ({message,setMessage}) => {
  const[text,setText]=useState("");

// const{setMessage}=useContext(Context);
const navigate=useNavigate();
const passMessage=()=>{
  let temp=[...message];
  temp.push(text);
  setMessage(temp);
  navigate('/inbox')

}

  return (
    <>
    <div><ProfileBar></ProfileBar></div>
    <div className="messages">
    <h1>Messages</h1>
    <textarea type="text" className="messageInput" placeholder="Write a message" onChange={(e)=>setText(e.target.value)}/>
    <div><button  onClick={passMessage}>Click</button></div>                                           
    </div>
    </> 
  )
}

export default Moments