import React,{useState} from "react";
import Header from "./components/header";
import Form from "./components/form";
import Todolist from "./components/todolist";
import "./index.css";

const App = () => {
    const [input, setInput]=useState("");
    const [todos, setTodos]=useState([]);
    const [editTodo, setEditTodo]=useState(null);
return ( 
<div className = "container" >
 <div className="app-wrapper">
    <div>
    <Header/>
    </div>
    <div>
    <Form
    input={input}
    setInput={setInput}
    todos={todos}
    setTodos={setTodos}
    setEditTodo={setEditTodo}
    editTodo={editTodo}
    />
    </div>
    <div>
        <Todolist 
    todos={todos}
    setEditTodo={setEditTodo}
    setTodos={setTodos}
        />
    </div> 
 </div>
</div >
    );
}

export default App;