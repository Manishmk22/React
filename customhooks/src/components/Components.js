import React from 'react'
import { useState } from 'react';

 const Components =()=> {
  
    const [name] = useState("");
    return (
      <div>{name}</div>
    )
  
}
export default Components;