

import React from 'react'
import {toast} from "react-toastify"
const TodoLists=({todo,setTodo})=>  {
  
  
  const changeDone = (item) =>{
  setTodo(
    todo.map((each) =>(
   
      each.task === item.task ? { ...each, done: !each.done } : each

    )
    
     
    ),
  );

}

  const removeTask = (rem) => {
    const deleteTask = [...todo];
    deleteTask.splice(rem, 1);
    setTodo(
      deleteTask,
    );
    toast.success("Task Removed Successfully!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // const todoLists = () =>
  console.log(typeof todo);
      console.log("Todos:",todo);
  return (
    <div>
      
  {todo.map((item, index) => {
      return <div>
      <li >
          <div className="taskRow">
          <div>
             
            <input
              type="checkbox"
              checked={item.done}
              className="checkBox"
              onChange={() => changeDone(item)}
            />
            <span className="Tasks">{item.task}</span>
          </div>
          <div>
            <span onClick={removeTask.bind(this, index)} className="close">
              x
            </span>
          </div>
      </div>
        </li>
        </div>
         })

}
        </div>

        // return (
        //   <div>{todoLists()}</div>
        // )
      
  )
      }

    
    
  
export default TodoLists;
