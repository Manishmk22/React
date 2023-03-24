

import React, { Component } from 'react'

export default class TodoLists extends Component {
  todoLists = () =>
    this.props.todo.map((item, index) => {
      console.log(item)
      return(
      <li key={item.task}>
          <div className="taskRow">
          <div>
             
            <input
              type="checkbox"
              checked={item.done}
              className="checkBox"
              onChange={() => this.props.changeDone(item)}
            />
            <span className="Tasks">{item.task}</span>
          </div>
          <div>
            <span onClick={this.props.removeTask.bind(this, index)} className="close">
              x
            </span>
          </div>
      </div>
        </li>
         )});
    
  render() {
    
    return (
      <div>{this.todoLists()}</div>
    )
  }
}
