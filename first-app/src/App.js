
import './App.css';
import React, { Component } from 'react';
import ErrorB1 from './components/ErrorB1';
import ErrorBoundary from './components/ErrorBoundary';
import Fragment from './components/Fragment';
import ConditionalRendering from './components/ConditionalRendering';
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

        Conditional Rendering
        <ConditionalRendering />

        {/* //Defaults props and types
        <DefaultP 
              name="Manish"
              city="Chennai"
          /> 
          <DefaultP 
              name="Kumar"
              city="Bangalore"
          />     */}

        </div>
    )
  }
}

export default App;
