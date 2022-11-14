import React from "react";

const FormTodo = (props) => {

  return (
    <div className={"form_todo absolute w-[95vw] p-4 bg-green-300 bg-opacity-95"}>
      <form onSubmit={props.handleAddTodo}>
        <div className={"flex flex-col"}>
          <label htmlFor={"todo"}>Todo</label>
          <input type={"text"} id={"todo"} name={"todo"} className={"border-2 border-green-400 rounded-md p-2"} required={true}/>
        </div>
        <div className={"flex flex-col"}>
          <label htmlFor={"description"}>Description</label>
          <input type={"text"} id={"description"} name={"description"} className={"border-2 border-green-400 rounded-md p-2"} required={true}/>
        </div>
        <div className={"flex flex-col"}>
          <label htmlFor={"date"}>Date</label>
          <input type={"date"} id={"date"} name={"date"} className={"border-2 border-green-400 rounded-md p-2"} required={true}/>
        </div>
        <button
          type={"submit"}
          className={"bg-green-400 text-white text-right px-4 py-2 rounded-md mt-4"}
        > Add Todo
        </button>
      </form>
    </div>
  )
}

export default FormTodo;