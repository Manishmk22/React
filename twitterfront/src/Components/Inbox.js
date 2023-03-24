import React from 'react'
import ProfileBar from './ProfileBar'
import { useState,useContext } from 'react'
import { Context } from './Navbar'
const Inbox = () => {
    const{message}=useContext(Context);
  return (
    <>
    <div><ProfileBar></ProfileBar></div>
    <div className="messages">
    <h1>Inbox</h1>
    <h2>{message}</h2>
    
    </div>
    </>
  )
}

export default Inbox