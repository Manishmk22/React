import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='contact'>Contact</NavLink>
      </nav>
    )
  }
}
