import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddTodoNote = () => {
  const { addTodo } = useContext(NoteContext);
  // usestae is being used to store the value of todonote.. and function to change its value
  const [todonote, settodonote] = useState({
    title: "Default Todo",
    description: "Default Description",
    tag: "Default",
  });

  const handleOnClick = (e) => {
    e.preventDefault();
    // below we aer adding the values for the code
    addTodo(todonote.title, todonote.description, todonote.tag);
    console.log("btton clicked");
  };
  // below we are appending the todonote.. that we have created with usestate
  const onchange = (e) => {
    settodonote({ ...todonote, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Add Todos</h2>

      <form>
        <div className="form-group">
          <label htmlFor="todoTitle">Todo Title</label>
          <input
            type="text"
            className="form-control border border-primary"
            id="todoTitle"
            name="title"
            placeholder="Enter Title"
            onChange={onchange} // we have use this function to get the variable value whenever the value get changed in input field
          />
        </div>
        <div className="form-group">
          <label htmlFor="todoDescription">Todo Description</label>
          <input
            type="text"
            className="form-control border border-primary"
            id="todoDescription"
            name="description"
            placeholder="Enter Description of the todo... "
            onChange={onchange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary "
          onClick={handleOnClick}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoNote;
