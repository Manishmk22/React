import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Title from "./components/title";
import Form from "./components/Form";
import TodoLists from "./components/TodoLists";
import { useState } from "react";
import Components from "./components/Components";


function App () {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todo: [
  //       { task: "Task1", done: false },
  //       { task: "Task2", done: true },
  //     ],
  //     newTodo: "",
  //   };
  // }
  
  const[todo,setTodo] = useState([{task: "Task1", done: false},{task: "Task2", done: true}]);
  const[newTodo,setnewTodo]=useState("");
  

  
 
 
 
   
   
    return (
      <div className="container">
        <Title />
        <div className="input-form">
          {/* <input
            type="text"
            className="form-control"
            placeholder="Add your To do's"
            value={this.state.newTodo}
            onChange={this.insertValue}
          />
          <button className="btn-primary" onClick={this.addTask}>
            Add Task
          </button> */}
          <Components  />
          <Form newTodo={newTodo} todo={todo} setTodo={setTodo} setnewTodo={setnewTodo} />
          <ToastContainer />
          {/* <Toasteradd /> */}

          <div className="todoTask">
            
            <TodoLists todo={todo} setTodo={setTodo}/>
            
          </div>
        </div>
      </div>
    );
  }


export default App;
