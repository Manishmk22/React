import React from 'react'
import Navbar from './Navbar'
import Moments from './Moments'
import Notification from './Notification'
import {Routes,Route} from 'react-router-dom'
import MainBar from './MainBar'
import Inbox from './Inbox'


const Front = () => {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path="/" element={<MainBar /> } />
     <Route path="moments" element={<Moments />} />
     <Route path="notification" element={<Notification />} />
     <Route path="inbox" element={<Inbox />} />
     </Routes>
    
      {/* <TweetModal /> */}
    </div>
    
  )
}

export default Front