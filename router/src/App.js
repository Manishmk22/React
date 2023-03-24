
import './App.css';
import React, { Component } from "react";
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navigation  from './components/Navigation';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Email from './components/Email';
import Address from './components/Address';
import PhoneNumber from './components/PhoneNumber';
class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}>
          <Route path="email" element={<Email/>}/>
          <Route path="address" element={<Address/>}/>
          <Route path="phone" element={<PhoneNumber/>}/>


        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </div>
    )
  }
}
export default App;