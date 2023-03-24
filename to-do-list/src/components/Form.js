

import React, { Component } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Form extends Component {
  constructor(props) {
   super(props);

  

  }
  

    
  render() {
    console.log(this.props);
    const { newTodo,addTask,insertValue } = this.props;
    
    return (
        <div>
       < input type="text" className="form-control" placeholder="Add your To do's" value={newTodo} onChange={insertValue}/>
        <button className="btn-primary" onClick={addTask}>Add Task</button>
        </div>
    )
  }
}
