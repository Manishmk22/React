import React from 'react'
import { useState ,useEffect} from 'react'

const ProfileBar = () => {
  const[profile,setProfile] = useState("")
  const[user,setUser] = useState("");

  useEffect(() =>{
    setProfile("Remy");
    setUser("@remy");


  })
  return (
    <div>
      <div className="con1" >
    <div className="sub1">
      
    <h1>RATATOUILLE</h1>
      </div>
     <div className="sub2">  
       <table className= "table0">
        <tbody>
         <tr><td><img src="https://static.vecteezy.com/system/resources/previews/003/513/755/original/mouse-cartoon-cute-rat-illustration-free-vector.jpg " id="image0" alt='img' />
         </td>
       <td>    
       <h4>{profile}</h4>
       <p>{user}</p>
         </td>
         </tr>
         </tbody>
       </table>
       <table className="table1">
        <tbody>
         <tr>
         <th>Tweets</th>
         <th>Following</th>
         <th>Followers</th>
         </tr>
         <tr>
           <td>5049</td>
           <td>324</td>
           <td>809</td>
          </tr> 
          </tbody>
       </table> 
  </div>
      </div>     
    </div>
  )
}

export default ProfileBar