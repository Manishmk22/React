import React, { Component } from 'react'
import { Link,Outlet } from 'react-router-dom'
export default class Contact extends Component {
  render() {
    return (
        <>
        <ul>

            <li><Link to="email">Email</Link></li> 
            <li><Link to="address">Address</Link></li>  
            <li><Link to="phone">Phone Number</Link></li>              
        </ul>
        <Outlet />
        </>
      
    )
  }
}
