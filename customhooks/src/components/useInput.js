import React from 'react'
import { useState } from 'react';

const useInput = (previousValue) => {
    console.log("Empty",previousValue);
    const[value,setValue]=useState(previousValue);

    const handleChange = (e)=>{

        setValue(e.target.value);
    }
  return {
    value:value,
    onChange:handleChange
  }
}

export default useInput