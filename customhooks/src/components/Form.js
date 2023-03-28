

import React from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useInput from './useInput';

const Form =({todo,newTodo,setnewTodo,setTodo})=>{

  const text=useInput("");

  // const insertValue = (e) => {
  //  e.preventDefault();
  //   const {value}=e.target;
  //   setnewTodo(value);
  // };
  
  const addTask = () => {
    if (text.value !== "") {
      setTodo(
        [...todo, { task:text.value, done: false }],
        
      );
      setnewTodo(""); 
      text.value="";
      
     
      toast.success("Task Added Successfully!!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Task cannot be Empty!!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  
  

    
  
   
    
    
    return (
        <div>
       {/* < input type="text" className="form-control" placeholder="Add your To do's" value={newTodo} onChange={insertValue}/> */}
       < input type="text" className="form-control" placeholder="Add your To do's" {...text}/>
        <button className="btn-primary" onClick={addTask}>Add Task</button>
        </div>
    )
  }


export default Form


