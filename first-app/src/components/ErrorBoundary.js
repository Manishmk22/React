 import React, { Component } from 'react'
 
 class ErrorBoundary extends Component {
constructor(props) {
  super(props)

  this.state = { 
     haveError: false
  }
}

    static getDerivedStateFromError(error) {
         return {
            haveError: true
         }
    }
    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo); 
    }
   render() {
    if(this.state.haveError){
        return <h1>Error Occurs!!Something went wrong</h1>
    }
     return this.props.children
 }
}
 export default  ErrorBoundary