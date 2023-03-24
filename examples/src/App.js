
import './App.css';
import React, { Component } from 'react';
import ConditionalRendering from '../../examples/src/components/ConditionalRendering';

  import ErrorB1 from '../../examples/src/components/ErrorB1';
  import ErrorBoundary from '../../examples/src/components/ErrorBoundary';
  import Fragment from '../../examples/src/components/Fragment';
  import DefaultP from '../../examples/src/components/DefaultP';
class App extends Component {
  render(){
    return(
      <div className="App">
        {/* //Error Boundary
        <ErrorBoundary>      
        <ErrorB1 name="Hello" />
        </ErrorBoundary>
        <ErrorBoundary>
        <ErrorB1 name="Manish" />
        </ErrorBoundary>  
        <ErrorBoundary>
        <ErrorB1 name="Kumar" />
        </ErrorBoundary>
         */}

        {/* //Fragment
        <Fragment />  */}

        {/* Conditional Rendering
        <ConditionalRendering /> */}

        //Defaults props and types
        <DefaultP 
              name={1}
              city="Chennai"
          /> 
          <DefaultP 
              name="Kumar"
              city="Bangalore"
          />    

        </div>
    )
  }
}

export default App;
