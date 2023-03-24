import React,{Component} from 'react';

class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        condition: true
      }
    }
  
    // if-else approach
    // render() {
    //   if (this.state.condition) {
    //     return <div>Condition True</div>
    //   } else {
    //     return <div>Condition False</div>
    //   }
    // }
  
    // element-variables 
    // render() {
    //   let message
    //   if (this.state.condition) {
    //     message = <div>Conditon Pass</div>
    //   } else {
    //     message = <div>Condition Fail</div>
    //   }
    //   return <div>{message}</div>
    // }
  
    //ternary-operator
    render() {
      return this.state.condition ? (
        <div>Ternary True</div>
      ) : (
        <div>Ternary False</div>
      )
    }
  
    // short-circuit-operator
    // render() {
    //   return this.state.condition && <div>Short Circuit</div>
    // }
  }
  export default ConditionalRendering