import React from 'react'

function ErrorB1({name}) {
    if(name=== "Manish"){
        throw new Error("Not a name");
    }
  return (
    <div>{name}</div>
  )
}

export default ErrorB1