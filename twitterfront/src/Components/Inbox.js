import React from 'react'
import ProfileBar from './ProfileBar'
import { useState,useContext,useEffect } from 'react'
import { Context } from './Navbar'
const Inbox = ({message}) => {
    // const{message}=useContext(Context);
    

  


  return (
    <>
    <div><ProfileBar></ProfileBar></div>
    <div className="messages">
    <h1>Inbox</h1>
    {message.map((data)=>{
       return <div className="message">
        
        <h4>{data}</h4>
        
       </div>
    }
    
    )}
    {/* <h2>{message}</h2> */}
    
    </div>
    </>
  )
}

export default Inbox