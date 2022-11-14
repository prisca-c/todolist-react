import React from "react";
import FormTodo from "./FormTodo";

const Table = (props) => {
  const todoList = props.todoList;

  let renderTodoList = todoList.map(
    todo => {
      return (
        <tr key={todo.id}>
          <td>{todo.todo}</td>
          <td>{todo.description}</td>
          <td>{todo.date}</td>
          <td><button className={"text-red-600"} value={todo.id} onClick={props.handleDelete}>Delete</button></td>
        </tr>
      )
  })

  const addTodoEvent = (e) => {
    props.handleAddTodo(e);
    setShowForm(false);
  }

  const [showForm, setShowForm] = React.useState(false);

  return(
    <div className={"mt-6 p-3 w-[90vw] mx-auto"}>
      <h2 className={"text-center"}>Table</h2>
      <table className={"w-[100%] table m-auto text-left border-2 border-green-400"}>
        <thead>
          <tr className={"border-b-2 border-b-green-400"}>
            <th scope={"col"} className={"w-[20%]"}>Todo</th>
            <th scope={"col"} className={"w-[53%]"}>Description</th>
            <th scope={"col"} className={"w-[17%]"}>Date</th>
            <th scope={"col"} className={"w-[10%]"}>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderTodoList}
        </tbody>
      </table>

      {
        showForm
          ? <FormTodo handleAddTodo={addTodoEvent}/>
          : null
      }

      {
        showForm
        ? null
        : <button
          className={"bg-green-400 text-white text-right px-4 py-2 rounded-md mt-4"}
          onClick={() => setShowForm(true)}
        >
          Add a new Todo
        </button>
      }
    </div>
  )
}

export default Table;