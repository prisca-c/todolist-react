import './App.css';
import Table from "./components/Table";
import {useState} from "react";

const App = () =>{
  const [todo, setTodo] = useState(
    [
      {
        id: 1,
        todo: "todo 1",
        description: "description 1",
        date: "2022-11-20",
      },
    ],
  )

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodo(
      [...todo,
      {
        id:
          todo.length === 0
            ? 1
            : todo[todo.length - 1].id + 1,
        todo: e.target.todo.value,
        description: e.target.description.value,
        date: e.target.date.value,
      }])
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setTodo(
      todo.filter(
        todo => todo.id !== parseInt(e.target.value)
    ))
  }

  return (
    <div className="App">
      <h2 className={"text-center"}>Todo Do List</h2>
      <Table todoList={todo} handleAddTodo={handleAddTodo} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
