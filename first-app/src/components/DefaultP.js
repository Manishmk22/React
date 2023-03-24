import React from 'react';
function DefaultP({name,city}){
    return(
        <div>
          <h1>{name}</h1>
          <h3>{city}</h3>

        </div>
    )
}

DefaultP.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}
DefaultP.defaultProps ={
    name:"Default Name",
    city:"Default City"
}
export default DefaultP;