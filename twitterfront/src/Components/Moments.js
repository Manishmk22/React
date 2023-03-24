import React from 'react'
import ProfileBar from './ProfileBar'
import { useState,useContext } from 'react'
import { Context } from './Navbar'
const Moments = () => {
  const[text,setText]=useState("");

const{setMessage}=useContext(Context);

  return (
    <>
    <div><ProfileBar></ProfileBar></div>
    <div className="messages">
    <h1>Messages</h1>
    <textarea type="text" className="messageInput" placeholder="Write a message" onChange={(e)=>setText(e.target.value)}/>
    <div><button  onClick={()=>setMessage(text)}>Click</button></div>                                           
    </div>
    </>
  )
}

export default Moments