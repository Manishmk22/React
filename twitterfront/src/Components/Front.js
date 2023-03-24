import React from 'react'
import Navbar from './Navbar'
import Moments from './Moments'
import Notification from './Notification'
import {Routes,Route} from 'react-router-dom'
import MainBar from './MainBar'
import Inbox from './Inbox'
import { useState } from 'react'

const Front = () => {

  const[message,setMessage] =useState([]);

  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path="/" element={<MainBar /> } />
     <Route path="moments" element={<Moments message={message}  setMessage={setMessage}/>} />
     <Route path="notification" element={<Notification />} />
     <Route path="inbox" element={<Inbox  message={message} />} />
     </Routes>
    
      {/* <TweetModal /> */}
    </div>
    
  )
}

export default Front