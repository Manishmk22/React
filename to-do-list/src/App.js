import React, { Component } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Title from "./components/title";
import Form from "./components/Form";
import TodoLists from "./components/TodoLists";
import Toasteradd from "./components/Toasteradd";
import Components from "./components/Components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { task: "Task1", done: false },
        { task: "Task2", done: true },
      ],
      newTodo: "",
    };
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  
  shouldComponentUpdate() {
    return true;
  }
  insertValue = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTask = () => {
    if (this.state.newTodo !== "") {
      this.setState({
        todo: [...this.state.todo, { task: this.state.newTodo, done: false }],
        newTodo: "",
      });
      
     
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
  changeDone = (item) =>
    this.setState({
      todo: this.state.todo.map((each) =>
        each.task === item.task ? { ...each, done: !each.done } : each
      ),
    });
  removeTask = (rem) => {
    const deleteTask = [...this.state.todo];
    deleteTask.splice(rem, 1);
    this.setState({
      todo: deleteTask,
    });
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

  render() {
    const { todo, newTodo } = this.state;
    const {insertValue,addTask,changeDone,removeTask} =this;
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
          <Components name="Manish" />
          <Form newTodo={newTodo} insertValue={insertValue}  addTask={addTask} />
          <ToastContainer />
          {/* <Toasteradd /> */}

          <div className="todoTask">
            {/* <ul>{this.todoLists()}</ul> */}
            <TodoLists todo={todo} changeDone={changeDone} removeTask={removeTask}/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
