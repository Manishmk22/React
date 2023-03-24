import React from 'react'
import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {FaTwitter,FaHome,FaInbox} from "react-icons/fa";
import {FiMessageSquare} from "react-icons/fi";
import{MdNotificationsActive} from "react-icons/md";
import { createContext } from 'react';


export const Context=createContext('');


const Navbar = () => {
  const[message,setMessage] =useState("");
  return (
    <nav className='navigation'>
      <div className='navElements'>
      <Context.Provider value={{message,setMessage}}>
        <NavLink to='/'><FaHome className="icons"  /> Home</NavLink>
        <NavLink to='moments'><FiMessageSquare className="icons" /> Messages</NavLink>
        <NavLink to='notification'><MdNotificationsActive className="icons"   /> Notification</NavLink>
        <NavLink to='inbox'><FaInbox className="icons" /> Inbox</NavLink>
        <p><FaTwitter size="25px" /></p>
        </Context.Provider>
        
    </div>  
    
      
    </nav>

    
  )
}

export default Navbar